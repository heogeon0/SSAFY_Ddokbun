package com.harryporter.ddokbun.domain.plant.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
public class PotLog {

    // 화분로그 번호
    @Id
    @Column(name = "log_seq", columnDefinition = "INTEGER UNSIGNED NOT NULL")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long logSeq;

    @Column(name = "temperature", nullable = false)
    private Double temperature;

    @Column(name = "humudity", nullable = false)
    private Double humudity;

    @Column(name = "soil_humidity", nullable = false)
    private Double soilHumidity;

    @Column(name = "water_level", nullable = false)
    private Double waterLevel;

    @Column(name = "light", nullable = false)
    private Double light;

    @Column(name = "create_time", nullable = false)
    private LocalDateTime createdTime;

    @JoinColumn(name = "pot_serial", nullable = false)
    @ManyToOne(fetch = FetchType.LAZY)
    private Pot pot;

    public PotLog(Pot pot) {
        this.temperature = 25.1;
        this.humudity = 30.0;
        this.soilHumidity = 32.2;
        this.waterLevel = 5.0;
        this.light = 3.0;
        this.createdTime = LocalDateTime.now();
        this.pot = pot;
    }
}
