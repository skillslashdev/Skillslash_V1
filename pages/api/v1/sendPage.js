import { getPostData } from "../../../lib/page";
export default function handler(req, res) {
  const DataScienceCourseData = getPostData(req.body);

  try {
    res.status(200).json({ DataScienceCourseData });
  } catch (error) {
    res.status(404).json({ error: "Data not found" });
  }
}
