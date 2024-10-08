import { AnomalyType } from "./Anomaly";
import { MissionType } from "./Missions";
import { WarningType } from "./Warning";

export type DeepDiveDataType = {
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
  