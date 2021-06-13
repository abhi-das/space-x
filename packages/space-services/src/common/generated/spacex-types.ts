interface SpaceLaunch {
  missionId: string;
  missionName: string;
  launch_success: string;
  land_success: string;
  launch_year: string;
}

interface MissionItem {
  details: string;
  image: string;
  isFeatured: string;
  landing_successful: string;
  launch_successful: string;
  launch_year: string;
  mission_id: string;
  mission_name: string;
}

interface DbQuery {
  limit?: number;
  landing_successful?: string;
  launch_successful?: string;
  launch_year?: string;
}

interface ProductDbQuery {
  limit?: number;
  category?: string;
  condition?: string;
  rating?: string;
}

export { SpaceLaunch, MissionItem, DbQuery, ProductDbQuery };
