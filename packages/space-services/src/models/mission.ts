import { dbConf } from '../config';
import mongoose from 'mongoose';

/* eslint-disable camelcase */
interface MissionDoc extends mongoose.Document {
  details: string;
  image: string;
  isFeatured: string;
  landing_successful: string;
  launch_successful: string;
  launch_year: string;
  mission_id: string;
  mission_name: string;
}
/* eslint-disable camelcase */
interface MissionProps {
  details: string;
  image: string;
  isFeatured: string;
  landing_successful: string;
  launch_successful: string;
  launch_year: string;
  mission_id: string;
  mission_name: string;
}

interface MissionModel extends mongoose.Model<MissionDoc> {
  buildMission: (attrs: MissionProps) => MissionDoc;
}

const missionSchema = new mongoose.Schema({
  details: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  isFeatured: {
    type: String,
    required: true,
  },
  landing_successful: {
    type: String,
    required: true,
  },
  launch_successful: {
    type: String,
    required: true,
  },
  launch_year: {
    type: String,
    required: true,
  },
  mission_id: {
    type: String,
    required: true,
  },
  mission_name: {
    type: String,
    required: true,
  },
});

/* eslint-disable @typescript-eslint/no-use-before-define */
missionSchema.statics.buildMission = (attrs: MissionProps) => {
  return new Mission(attrs);
};

const Mission = mongoose.model<MissionDoc, MissionModel>(
  'Mission',
  missionSchema,
  `${dbConf.missionCollection}`,
);

export { Mission };
