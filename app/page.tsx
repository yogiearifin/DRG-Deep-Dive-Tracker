"use client";
import Image from "next/image";
import { Loader } from "./component/Loader";
import { useEffect, useState } from "react";

type DeepDiveDataType = {
  endTime: string;
  startTime: string;
  variants: {
    biome: string;
    name: string;
    seed: number;
    stages: {
      anomaly: AnomalyType | null;
      id: number;
      primary: MissionType;
      secondary: MissionType;
      warning: WarningType | null;
    }[];
    type: string;
  }[];
};

type MissionType =
  | "on-site refining"
  | "egg"
  | "morkite"
  | "morkite well"
  | "dreadnought"
  | "mule"
  | "black box"
  | "escort duty"
  | "industrial sabotage"
  | "aquarq"
  | "deep scan"
  | "crystal scan";

type AnomalyType =
  | "blood sugar"
  | "critical weakness"
  | "gold rush"
  | "golden bugs"
  | "low gravity"
  | "rich atmosphere"
  | "volatile guts";

type WarningType =
  | "cave leech cluster"
  | "duck and cover"
  | "elite threat"
  | "exploder infestation"
  | "haunted cave"
  | "lethal enemies"
  | "low oxygen"
  | "mactera plague"
  | "parasites"
  | "regenerative bugs"
  | "rival presence"
  | "rock infestation"
  | "shield disruption"
  | "swarmageddon";

export default function Home() {
  const [data, setData] = useState<DeepDiveDataType>({
    endTime: "",
    startTime: "",
    variants: [],
  });
  const getData = async () => {
    const res = await fetch("https://drgapi.com/v1/deepdives");
    const fetchData: DeepDiveDataType = await res.json();
    setData(fetchData);
  };

  useEffect(() => {
    getData();
  }, []);

  const renderIcon = () => {
    return (
      <Image
        src={require("./media/deep-dive-icon.webp")}
        alt="Deep Dive Icon"
        className="mx-2 object-contain"
        loading="lazy"
      />
    );
  };

  const converDate = (date: string) => {
    return new Date(date).toString();
  };

  const renderMissionIcons = (mission: MissionType | string) => {
    switch (true) {
      case mission.includes("on-site refining"):
      case mission.includes("morkite well"):
        return (
          <Image
            src={require("./media/missionIcons/liquid-morkite.webp")}
            alt={mission}
            width={24}
            height={24}
          />
        );
      case mission.includes("egg"):
        return (
          <Image
            src={require("./media/missionIcons/egg.webp")}
            alt={mission}
            width={24}
            height={24}
          />
        );
      case mission.includes("morkite"):
        return (
          <Image
            src={require("./media/missionIcons/morkite.webp")}
            alt={mission}
            width={24}
            height={24}
          />
        );
      case mission.includes("dreadnought"):
        return (
          <Image
            src={require("./media/missionIcons/boss.webp")}
            alt={mission}
            width={24}
            height={24}
          />
        );
      case mission.includes("mule"):
        return (
          <Image
            src={require("./media/missionIcons/mule.webp")}
            alt={mission}
            width={24}
            height={24}
          />
        );
      case mission.includes("black box"):
        return (
          <Image
            src={require("./media/missionIcons/blackbox.webp")}
            alt={mission}
            width={24}
            height={24}
          />
        );
      case mission.includes("escort duty"):
        return (
          <Image
            src={require("./media/missionIcons/dotty.webp")}
            alt={mission}
            width={24}
            height={24}
          />
        );
      case mission.includes("industrial sabotage"):
        return (
          <Image
            src={require("./media/missionIcons/sabotage.webp")}
            alt={mission}
            width={24}
            height={24}
          />
        );
      case mission.includes("aquarq"):
        return (
          <Image
            src={require("./media/missionIcons/aquarq.webp")}
            alt={mission}
            width={24}
            height={24}
          />
        );
      case mission.includes("crystal scan"):
      case mission.includes("deep scan"):
        return (
          <Image
            src={require("./media/missionIcons/deep-scan.webp")}
            alt={mission}
            width={24}
            height={24}
          />
        );
    }
  };

  const renderAnomalies = (anomaly: AnomalyType | string) => {
    switch (true) {
      case anomaly.includes("blood sugar"):
        return (
          <Image
            src={require("./media/anomalies/blood-sugar.webp")}
            alt={anomaly}
            width={24}
            height={24}
          />
        );
      case anomaly.includes("critical weakness"):
        return (
          <Image
            src={require("./media/anomalies/critical-weakness.webp")}
            alt={anomaly}
            width={24}
            height={24}
          />
        );
      case anomaly.includes("gold rush"):
        return (
          <Image
            src={require("./media/anomalies/gold-rush.webp")}
            alt={anomaly}
            width={24}
            height={24}
          />
        );
      case anomaly.includes("golden bugs"):
        return (
          <Image
            src={require("./media/anomalies/golden-bugs.webp")}
            alt={anomaly}
            width={24}
            height={24}
          />
        );
      case anomaly.includes("low gravity"):
        return (
          <Image
            src={require("./media/anomalies/low-gravity.webp")}
            alt={anomaly}
            width={24}
            height={24}
          />
        );
      case anomaly.includes("rich atmosphere"):
        return (
          <Image
            src={require("./media/anomalies/rich-atmosphere.webp")}
            alt={anomaly}
            width={24}
            height={24}
          />
        );
      case anomaly.includes("volatile guts"):
        return (
          <Image
            src={require("./media/anomalies/volatile-guts.webp")}
            alt={anomaly}
            width={24}
            height={24}
          />
        );
      default:
        null;
    }
  };

  const renderWarning = (warning: WarningType | string) => {
    switch (true) {
      case warning.includes("cave leech cluster"):
        return (
          <Image
            src={require("./media/warning/cave-leech-cluster.webp")}
            alt={warning}
            width={24}
            height={24}
          />
        );
      case warning.includes("duck and cover"):
        return (
          <Image
            src={require("./media/warning/duck-and-cover.webp")}
            alt={warning}
            width={24}
            height={24}
          />
        );
      case warning.includes("elite threat"):
        return (
          <Image
            src={require("./media/warning/elite-threat.webp")}
            alt={warning}
            width={24}
            height={24}
          />
        );
      case warning.includes("exploder infestation"):
        return (
          <Image
            src={require("./media/warning/exploder-infestation.webp")}
            alt={warning}
            width={24}
            height={24}
          />
        );
      case warning.includes("haunted cave"):
        return (
          <Image
            src={require("./media/warning/haunted-cave.webp")}
            alt={warning}
            width={24}
            height={24}
          />
        );
      case warning.includes("lethal enemies"):
        return (
          <Image
            src={require("./media/warning/lethal-enemies.webp")}
            alt={warning}
            width={24}
            height={24}
          />
        );
      case warning.includes("low oxygen"):
        return (
          <Image
            src={require("./media/warning/low-oxygen.webp")}
            alt={warning}
            width={24}
            height={24}
          />
        );
      case warning.includes("mactera plague"):
        return (
          <Image
            src={require("./media/warning/mactera-plague.webp")}
            alt={warning}
            width={24}
            height={24}
          />
        );
      case warning.includes("parasites"):
        return (
          <Image
            src={require("./media/warning/parasites.webp")}
            alt={warning}
            width={24}
            height={24}
          />
        );
      case warning.includes("regenerative bugs"):
        return (
          <Image
            src={require("./media/warning/regenerative-bugs.webp")}
            alt={warning}
            width={24}
            height={24}
          />
        );
      case warning.includes("rival presence"):
        return (
          <Image
            src={require("./media/warning/rival-presence.webp")}
            alt={warning}
            width={24}
            height={24}
          />
        );
      case warning.includes("ebonite outbreak"):
        return (
          <Image
            src={require("./media/warning/rock-infestation.webp")}
            alt={warning}
            width={24}
            height={24}
          />
        );
      case warning.includes("shield disruption"):
        return (
          <Image
            src={require("./media/warning/shield-disruption.webp")}
            alt={warning}
            width={24}
            height={24}
          />
        );
      case warning.includes("swarmageddon"):
        return (
          <Image
            src={require("./media/warning/swarmageddon.webp")}
            alt={warning}
            width={24}
            height={24}
          />
        );
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center flex-wrap p-4">
      <div className="flex my-4">
        {renderIcon()}
        <div className="flex items-center">
          <h1 className="text-[#FFEE03] text-xl text-center">
            Deep Rock Galactic Deep Dive Tracker
          </h1>
        </div>
        {renderIcon()}
      </div>
      {data.variants.length ? (
        <div>
          <div>
            <p className="text-lg text-center">
              Start Time: {converDate(data.startTime)}
            </p>
            <p className="text-lg text-center text-red-500">
              End Time: {converDate(data.endTime)}
            </p>
          </div>
          {data.variants.map((item, index) => {
            return (
              <div key={index} className="p-2">
                <h1 className="text-2xl">{item.type}</h1>
                <h3>Name: {item.name}</h3>
                <h3>Biome: {item.biome}</h3>
                <div className="flex flex-wrap justify-between gap-6">
                  {item.stages.map((items, index) => {
                    return (
                      <div key={index} className="m-4">
                        <p>Stage {index + 1}</p>
                        <div className="flex flex-wrap">
                          <p className="mr-2">Primary: {items.primary}</p>
                          {renderMissionIcons(items.primary.toLowerCase())}
                        </div>
                        <div className="flex flex-wrap">
                          <p className="mr-2">Secondary: {items.secondary}</p>
                          {renderMissionIcons(items.secondary.toLowerCase())}
                        </div>
                        <div className="flex flex-wrap">
                          <p className={`mr-2 ${items.anomaly ? "text-yellow-500" : ""}`}>
                            Anomaly: {items.anomaly ?? "none"}
                          </p>
                          {items.anomaly &&
                            renderAnomalies(items.anomaly?.toLowerCase())}
                        </div>
                        <div className="flex flex-wrap">
                          <p className={`mr-2 ${items.warning ? "text-red-500" : ""}`}>
                            Warning: {items.warning ?? "none"}
                          </p>
                          {items.warning &&
                            renderWarning(items.warning?.toLowerCase())}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <Loader />
      )}
    </main>
  );
}
