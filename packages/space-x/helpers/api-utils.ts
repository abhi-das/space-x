export async function getAllLaunch() {
  const response = await fetch(
    "https://space-lauch-default-rtdb.firebaseio.com/spaceX.json"
  );
  const data = await response.json();

  const launches = [];

  for (const key in data) {
    launches.push({
      id: key,
      ...data[key],
    });
  }

  return launches;
}

export async function getFeaturedLaunch() {
  const allLaunches = await getAllLaunch();
  return allLaunches.filter((launch) => launch.isFeatured);
}

export async function getLaunchById(id) {
  // TODO: Id pass year then search by year here
  const allLaunches = await getAllLaunch();
  return allLaunches.find((launch) => launch.mission_id === id);
}

export async function getLaunchByYear(year) {
  const allLaunches = await getAllLaunch();
  return allLaunches.find((launch) => launch.launch_year === year);
}

export async function getFilteredLaunch(dateFilter) {
  const { year, isSuccess } = dateFilter;
  const allLaunches = await getAllLaunch();
  const filteredLaunch = allLaunches.filter((launch) => {
    return (
      launch.launch_year === year &&
      launch.launch_successful.toString() === isSuccess
    );
  });

  return filteredLaunch;
}
