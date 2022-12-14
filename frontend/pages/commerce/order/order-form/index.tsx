import { GetServerSideProps, NextPage } from "next";
import { useState, useEffect } from "react";
import { postKakaoPay, postOrderList } from "../../../../apis/commerce";
import CartList from "../../../../components/commerce/cart/CartList";
import OrderFormComponent from "../../../../components/commerce/order/OrderForm";
import PayFormComponent from "../../../../components/commerce/order/PayForm";
import { Wrapper } from "../../../../styles/commerce/order/order-form/styles";
import { getCookie, setCookie } from "cookies-next";
import axios from "axios";
import { useDispatch } from "react-redux";
import { StoreState, wrapper } from "../../../../store";
import { useSelect } from "@react-three/drei";
import { useSelector } from "react-redux";
import { context } from "@react-three/fiber";
import { AppContext } from "next/dist/pages/_app";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import NaverPay from "../../../../assets/naverpay.png";
import KakaoPay from "../../../../assets/kakaopay.png";
import Image from "next/image";

const OrderForm: NextPage<{ isMobile: boolean }> = ({ isMobile }) => {
  const [name, setName] = useState("");
  const [phoneHead, setPhoneHead] = useState("010");
  const [phoneBody, setPhoneBody] = useState("");
  const [phoneTail, setPhoneTail] = useState("");

  const [mailHead, setHeadEmail] = useState("");
  const [mailTail, setTailEmail] = useState("naver.com");
  const [post, setPost] = useState("");
  const [detailPost, setDetailPost] = useState("");
  const [additionalPost, setAdditionalPost] = useState("");

  const [payType, setPayType] = useState(1);

  const [flag, setFlag] = useState(0);

  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [mailError, setMailError] = useState("");
  const [postEroor, setPostError] = useState("");

  const [total_amount, setOrderTotal] = useState(0);
  const [item_name, setItemName] = useState("");
  const [item_seq, setItemSeq] = useState("");

  const orderItems = useSelector((state: StoreState) => state.orderListSlice);
  const router = useRouter();

  useEffect(() => {
    const NewOrder = orderItems.filter(item => {
      if (item) return item;
    });
    if (NewOrder.length < 1) {
      console.log("hi");

      router.push("/commerce/cart");
    }

    if (NewOrder.length > 1) {
      setItemName(orderItems[0]?.itemName + ` ??? ${NewOrder.length - 1}???`);
    } else {
      setItemName(NewOrder[0]?.itemName);
    }

    NewOrder.map(item => {
      setItemSeq(val => val + `${item.itemSeq},`);
    });
  }, []);
  const postOrder = async () => {
    console.log(item_seq);

    try {
      const res = await postOrderList(
        item_name,
        item_seq,
        mailHead + mailTail,
        payType,
        phoneHead + phoneBody + phoneTail,
        total_amount,
        post,
        detailPost,
        additionalPost,
        name,
      );

      setCookie("orderSeq", res.orderSeq);

      if (payType === 1) {
        postKakaoPay(res.orderSeq, total_amount, item_name, isMobile);
      } else {
        Swal.fire({
          icon: "info",
          titleText: "?????? ??????????????????.",
          text: "?????????????????? ??????????????????.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        titleText: "????????? ??????????????????",
        text: "???????????? ?????? ??????????????????",
      });
    }
  };
  /** ??? ????????? ?????? */
  const onSubmitHandler = () => {
    if (name) {
      const reg = /[\s\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
      if (name.length > 20 || reg.test(name) === true) {
        setNameError("??????????????? ??????????????????");
        Swal.fire({
          icon: "warning",
          titleText: "??????????????? ??????????????????",
        });
        return;
      } else {
        setNameError("");
      }
    } else {
      setNameError("????????? ??????????????????");
      Swal.fire({
        icon: "warning",
        titleText: "??????????????? ??????????????????",
      });
      return;
    }

    if (phoneHead && phoneBody && phoneTail) {
      const fullPhone = phoneHead + phoneBody + phoneTail;
      const reg = /^[0-9]+$/;
      if (fullPhone.length > 12 || reg.test(fullPhone) !== true) {
        setPhoneError("????????? ??????????????? ??????????????????");
        Swal.fire({
          icon: "warning",
          titleText: "??????????????? ??????????????????",
        });
        return;
      }

      setPhoneError("");
    } else {
      setPhoneError("??????????????? ??????????????????");
      setFlag(1);
      Swal.fire({
        icon: "warning",
        titleText: "??????????????? ??????????????????",
      });
      return;
    }

    if (mailHead && mailTail) {
      const fullEmail = mailHead + "@" + mailTail;
      const reg =
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
      if (reg.test(fullEmail) === true) {
        setMailError("");
      } else {
        setMailError("????????? ???????????? ??????????????????");

        Swal.fire({
          icon: "warning",
          titleText: "??????????????? ??????????????????",
        });
        return;
      }
    } else {
      setMailError("????????? ???????????? ??????????????????");

      Swal.fire({
        icon: "warning",
        titleText: "??????????????? ??????????????????",
      });
      return;
    }

    if (post && detailPost && additionalPost) {
      setPostError("");
    } else {
      setPostError("?????? ????????? ??????????????????");
      Swal.fire({
        icon: "warning",
        titleText: "??????????????? ??????????????????",
      });
      return;
    }

    if (!payType) {
      Swal.fire({
        icon: "warning",
        titleText: "??????????????? ??????????????????",
      });
    } else {
      try {
        postOrder();
      } catch {
        Swal.fire({
          icon: "warning",
          titleText: "??????????????? ??????????????????",
        });
      }
    }
  };

  return (
    <Wrapper>
      <div className="contents">
        <div className="row">
          <h1>Buy List</h1>
          <CartList setOrderTotal={setOrderTotal} flag={"order"} />
        </div>
      </div>
      <div className="background">
        <div className="pay-grid">
          <div className="row">
            <h1 className="sub-title">Order Information</h1>
            <OrderFormComponent
              name={name}
              phoneHead={phoneHead}
              phoneBody={phoneBody}
              phoneTail={phoneTail}
              mailHead={mailHead}
              mailTail={mailTail}
              post={post}
              detailPost={detailPost}
              additionalPost={additionalPost}
              nameError={nameError}
              phoneError={phoneError}
              mailError={mailError}
              postError={postEroor}
              setName={setName}
              setHeadEmail={setHeadEmail}
              setTailEmail={setTailEmail}
              setPost={setPost}
              setDetailPost={setDetailPost}
              setAdditionalPost={setAdditionalPost}
              setPhoneHead={setPhoneHead}
              setPhoneBody={setPhoneBody}
              setPhoneTail={setPhoneTail}
            />
          </div>
          <div className="row">
            <h1 className="sub-title">Payment Method</h1>
            <PayFormComponent setPayType={setPayType} />
            {/* <div className="button" onClick={onSubmitHandler}>
              <Image src={NaverPay} objectFit="contain" layout="fill" />
            </div> */}
            <div className="button" onClick={onSubmitHandler}>
              <Image src={KakaoPay} objectFit="cover" layout="fill" />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default OrderForm;

export const getServerSideProps: GetServerSideProps = async context => {
  return {
    props: {
      isMobile: !(context.req.headers["user-agent"]?.indexOf("Mobi") === -1),
    },
  };
};
