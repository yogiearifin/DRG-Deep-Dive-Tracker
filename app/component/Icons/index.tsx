import { MissionType } from "./interface/missions";
import { AnomalyType } from "./interface/Anomaly";
import { WarningType } from "./interface/Warning";
import Image from "next/image";

export const Icons = (item: MissionType | AnomalyType | WarningType | string) => {
  switch (true) {
    case item.includes('deep-dive-icon'):
      return (
        <Image
          src={require("../../media/deep-dive-icon.webp")}
          alt="Deep Dive Icon"
          className="mx-2 object-contain"
          loading="lazy"
        />
      );
    case item.includes("on-site refining"):
    case item.includes("morkite well"):
      return (
        <Image
          src={require("../../media/missionIcons/liquid-morkite.webp")}
          alt={item}
          width={24}
          height={24}
        />
      );
    case item.includes("egg"):
      return (
        <Image
          src={require("../../media/missionIcons/egg.webp")}
          alt={item}
          width={24}
          height={24}
        />
      );
    case item.includes("morkite"):
      return (
        <Image
          src={require("../../media/missionIcons/morkite.webp")}
          alt={item}
          width={24}
          height={24}
        />
      );
    case item.includes("dreadnought"):
      return (
        <Image
          src={require("../../media/missionIcons/boss.webp")}
          alt={item}

          width={24}
          height={24}
        />
      );
    case item.includes("mule"):
      return (
        <Image
          src={require("../../media/missionIcons/mule.webp")}
          alt={item}
          width={24}
          height={24}
        />
      );
    case item.includes("black box"):
      return (
        <Image
          src={require("../../media/missionIcons/blackbox.webp")}
          alt={item}
          width={24}
          height={24}
        />
      );
    case item.includes("escort duty"):
      return (
        <Image
          src={require("../../media/missionIcons/dotty.webp")}
          alt={item}
          width={24}
          height={24}
        />
      );
    case item.includes("industrial sabotage"):
      return (
        <Image
          src={require("../../media/missionIcons/sabotage.webp")}
          alt={item}
          width={24}
          height={24}
        />
      );
    case item.includes("aquarq"):
      return (
        <Image
          src={require("../../media/missionIcons/aquarq.webp")}
          alt={item}
          width={24}
          height={24}
        />
      );
    case item.includes("crystal scan"):
    case item.includes("deep scan"):
      return (
        <Image
          src={require("../../media/missionIcons/deep-scan.webp")}
          alt={item}
          width={24}
          height={24}
        />
      );
    case item.includes("blood sugar"):
      return (
        <Image
          src={require("../../media/anomalies/blood-sugar.webp")}
          alt={item}
          width={24}
          height={24}
        />
      );
    case item.includes("critical weakness"):
      return (
        <Image
          src={require("../../media/anomalies/critical-weakness.webp")}
          alt={item}

          width={24}
          height={24}
        />
      );
    case item.includes("gold rush"):
      return (
        <Image
          src={require("../../media/anomalies/gold-rush.webp")}
          alt={item}
          width={24}
          height={24}
        />
      );
    case item.includes("golden bugs"):
      return (
        <Image
          src={require("../../media/anomalies/golden-bugs.webp")}
          alt={item}
          width={24}
          height={24}
        />
      );
    case item.includes("low gravity"):
      return (
        <Image
          src={require("../../media/anomalies/low-gravity.webp")}
          alt={item}
          width={24}
          height={24}
        />
      );
    case item.includes("rich atmosphere"):
      return (
        <Image
          src={require("../../media/anomalies/rich-atmosphere.webp")}
          alt={item}
          width={24}
          height={24}
        />
      );
    case item.includes("volatile guts"):
      return (
        <Image
          src={require("../../media/anomalies/volatile-guts.webp")}
          alt={item}
          width={24}
          height={24}
        />
      );
    case item.includes("cave leech cluster"):
      return (
        <Image
          src={require("../../media/warning/cave-leech-cluster.webp")}
          alt={item}
          width={24}
          height={24}
        />
      );
    case item.includes("duck and cover"):
      return (
        <Image
          src={require("../../media/warning/duck-and-cover.webp")}
          alt={item}
          width={24}
          height={24}
        />
      );
    case item.includes("elite threat"):
      return (
        <Image
          src={require("../../media/warning/elite-threat.webp")}
          alt={item}
          width={24}
          height={24}
        />
      );
    case item.includes("exploder infestation"):
      return (
        <Image
          src={require("../../media/warning/exploder-infestation.webp")}
          alt={item}
          width={24}
          height={24}
        />
      );
    case item.includes("haunted cave"):
      return (
        <Image
          src={require("../../media/warning/haunted-cave.webp")}
          alt={item}
          width={24}
          height={24}
        />
      );
    case item.includes("lethal enemies"):
      return (
        <Image
          src={require("../../media/warning/lethal-enemies.webp")}
          alt={item}
          width={24}
          height={24}
        />
      );
    case item.includes("low oxygen"):
      return (
        <Image
          src={require("../../media/warning/low-oxygen.webp")}
          alt={item}
          width={24}
          height={24}
        />
      );
    case item.includes("mactera plague"):
      return (
        <Image
          src={require("../../media/warning/mactera-plague.webp")}
          alt={item}
          width={24}
          height={24}
        />
      );
    case item.includes("parasites"):
      return (
        <Image
          src={require("../../media/warning/parasites.webp")}
          alt={item}
          width={24}
          height={24}
        />
      );
    case item.includes("regenerative bugs"):
      return (
        <Image
          src={require("../../media/warning/regenerative-bugs.webp")}
          alt={item}
          width={24}
          height={24}
        />
      );
    case item.includes("rival presence"):
      return (
        <Image
          src={require("../../media/warning/rival-presence.webp")}
          alt={item}
          width={24}
          height={24}
        />
      );
    case item.includes("ebonite outbreak"):
      return (
        <Image
          src={require("../../media/warning/rock-infestation.webp")}
          alt={item}
          width={24}
          height={24}
        />
      );
    case item.includes("shield disruption"):
      return (
        <Image
          src={require("../../media/warning/shield-disruption.webp")}
          alt={item}
          width={24}
          height={24}
        />
      );
    case item.includes("swarmageddon"):
      return (
        <Image
          src={require("../../media/warning/swarmageddon.webp")}
          alt={item}
          width={24}
          height={24}
        />
      );
    default:
      null;
  }
};