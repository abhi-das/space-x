import axios from "axios";

export async function getAllLaunch() {
  try {
    const response = await axios.get(
      `https://space-lauch-default-rtdb.firebaseio.com/spaceX.json`
    );
    return response.data;
  } catch (err) {
    // console.error(err.response.data);
    return {
      errors: err.response.data,
    };
  }
}

export async function getFeaturedLaunch() {
  const allLaunches = await getAllLaunch();
  return allLaunches.filter((launch) => launch.isFeatured);
}

export async function getLaunchById(id: string) {
  // TODO: Id pass year then search by year here
  const allLaunches = await getAllLaunch();
  return allLaunches.find((launch) => launch.mission_id === id);
}

export async function getLaunchByYear(year: string) {
  const allLaunches = await getAllLaunch();
  return allLaunches.find((launch) => launch.launch_year === year);
}

export async function getFilteredLaunch(dateFilter) {
  const { year, isSuccessLaunch, isSuccessLand } = dateFilter;
  const allLaunches = await getAllLaunch();
  const filteredLaunch = allLaunches.filter((launch) => {
    return (
      launch.launch_year === year &&
      launch.launch_successful.toString() === isSuccessLaunch &&
      launch.landing_successful.toString() === isSuccessLand
    );
  });

  return filteredLaunch;
}
