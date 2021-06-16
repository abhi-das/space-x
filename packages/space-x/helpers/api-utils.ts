import { LaunchListItem } from "../components/launches/launch-list";
import axios from "axios";
import { ProductItem } from "../pages/products";

export interface ResError {
  message?: string;
}

export async function getAllRecords(): Promise<
  Array<LaunchListItem> | ResError
> {
  const options = {
    headers: { "Content-Type": "application/json" },
  };
  try {
    // const response = await axios.get(
    //   `https://space-lauch-default-rtdb.firebaseio.com/spaceX.json`
    // );
    const response = await axios.get(
      "https://space-x-apiv.herokuapp.com/v4/launches",
      options
    );
    return response.data;
  } catch (err: any) {
    // TODO: Define Error Type at backend and export interface and use it here
    const error = {
      message: "Internal server error while getting records!",
    } as ResError;
    return error;
  }
}

export async function getFeaturedLaunch(): Promise<
  Array<LaunchListItem> | ResError
> {
  const response = await getAllRecords();
  if (response instanceof Array) {
    return response.filter((launch) => launch.isFeatured);
  }
  return response;
}

export async function getLaunchById(
  id: string | string[]
): Promise<LaunchListItem | ResError> {
  // TODO: Id pass year then search by year here
  const response = await getAllRecords();
  if (response instanceof Array) {
    const result = response.find((launch) => launch.mission_id === id);
    return result ? result : { message: "No record found!" };
  }
  return response;
}

export async function getLaunchByYear(
  year
): Promise<LaunchListItem | ResError> {
  const response = await getAllRecords();
  if (response instanceof Array) {
    const result = response.find((launch) => launch.launch_year === year);
    return result ? result : { message: "No record found!" };
  }
  return response;
}

export async function getFilteredLaunch(
  dateFilter
): Promise<Array<LaunchListItem> | ResError> {
  const { year, isSuccessLaunch, isSuccessLand } = dateFilter;
  const response = await getAllRecords();
  if (response instanceof Array) {
    const filteredLaunch = response.filter((launch) => {
      return (
        launch.launch_year === year &&
        launch.launch_successful.toString() === isSuccessLaunch &&
        launch.landing_successful.toString() === isSuccessLand
      );
    });
    return filteredLaunch ? filteredLaunch : [];
  }
  return response;
}

export async function getProducts(url): Promise<Array<ProductItem> | ResError> {
  const options = {
    headers: { "Content-Type": "application/json" }
  };
  try {
    const res = await axios.get(url, options);
    return res.data;
  } catch(err: any) {
    const error = {
      message: "Internal server error while getting records!",
    } as ResError;
    return error;
  }
}
