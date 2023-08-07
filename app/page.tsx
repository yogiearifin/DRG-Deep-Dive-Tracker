import Image from "next/image";
import { Loader } from "./component/Loader";

type DeepDiveDataType = {
  endTime: string;
  startTime: string;
  variants: {
    biome: string;
    name: string;
    seed: number;
    stages: {
      anomaly: string | null;
      id: number;
      primary: string;
      secondary: string;
      warning: string | null;
    }[];
    type: string;
  }[];
};

export default async function Home() {
  const res = await fetch("https://drgapi.com/v1/deepdives");
  const data: DeepDiveDataType = await res.json();
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

  const renderMissionIcons = (mission: string) => {
    if (mission.toLowerCase().includes("on-site refining")) {
      return (
        <Image
          src={require("./media/missionIcons/liquid-morkite.webp")}
          alt={mission}
          width={24}
          height={24}
        />
      );
    }
    if (mission.toLowerCase().includes("egg")) {
      return (
        <Image
          src={require("./media/missionIcons/egg.webp")}
          alt={mission}
          width={24}
          height={24}
        />
      );
    }
    if (mission.toLowerCase().includes("morkite")) {
      return (
        <Image
          src={require("./media/missionIcons/morkite.webp")}
          alt={mission}
          width={24}
          height={24}
        />
      );
    }
    if (mission.toLowerCase().includes("dreadnought")) {
      return (
        <Image
          src={require("./media/missionIcons/boss.webp")}
          alt={mission}
          width={24}
          height={24}
        />
      );
    }
    if (mission.toLowerCase().includes("mule")) {
      return (
        <Image
          src={require("./media/missionIcons/mule.webp")}
          alt={mission}
          width={24}
          height={24}
        />
      );
    }
    if (mission.toLowerCase().includes("black box")) {
      return (
        <Image
          src={require("./media/missionIcons/blackbox.webp")}
          alt={mission}
          width={24}
          height={24}
        />
      );
    }
    if (mission.toLowerCase().includes("escort duty")) {
      return (
        <Image
          src={require("./media/missionIcons/dotty.png")}
          alt={mission}
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
      {data ? (
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
                <div className="flex flex-wrap justify-between">
                  {item.stages.map((items, index) => {
                    return (
                      <div key={index} className="m-4">
                        <p>Stage {index + 1}</p>
                        <div className="flex flex-wrap">
                          <p className="mr-2">Primary: {items.primary}</p>
                          {renderMissionIcons(items.primary)}
                        </div>
                        <div className="flex flex-wrap">
                          <p className="mr-2">Secondary: {items.secondary}</p>
                          {renderMissionIcons(items.secondary)}
                        </div>
                        <p className={items.anomaly ? "text-yellow-500" : ""}>
                          Anomaly: {items.anomaly ?? "none"}
                        </p>
                        <p className={items.warning ? "text-red-500" : ""}>
                          Warning: {items.warning ?? "none"}
                        </p>
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
