"use client";
import { Loader } from "./component/Loader";
import { useEffect } from "react";
import { converDate } from "./helpers";
import { UseDeepDive } from "./hooks";
import { Icons } from "./component/Icons";

export default function Home() {
  const {data, getData} = UseDeepDive()

  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center flex-wrap p-4">
      <div className="flex my-4">
        {Icons('deep-dive-icon')}
        <div className="flex items-center">
          <h1 className="text-[#FFEE03] text-xl text-center">
            Deep Rock Galactic Deep Dive Tracker
          </h1>
        </div>
        {Icons('deep-dive-icon')}
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
                          {Icons(items.primary.toLowerCase())}
                        </div>
                        <div className="flex flex-wrap">
                          <p className="mr-2">Secondary: {items.secondary}</p>
                          {Icons(items.secondary.toLowerCase())}
                        </div>
                        <div className="flex flex-wrap">
                          <p className={`mr-2 ${items.anomaly ? "text-yellow-500" : ""}`}>
                            Anomaly: {items.anomaly ?? "none"}
                          </p>
                          {items.anomaly &&
                            Icons(items.anomaly?.toLowerCase())}
                        </div>
                        <div className="flex flex-wrap">
                          <p className={`mr-2 ${items.warning ? "text-red-500" : ""}`}>
                            Warning: {items.warning ?? "none"}
                          </p>
                          {items.warning &&
                            Icons(items.warning?.toLowerCase())}
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
