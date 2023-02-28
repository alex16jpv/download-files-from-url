import axios from "axios";
import fs from "fs";
import path from "path";

const downloadImageOrVideo = async (url, directory) => {
  try {
    const response = await axios({
      url,
      method: "GET",
      responseType: "stream",
    });

    const filename = path.basename(url);
    const filepath = path.join(directory, filename);

    // Create the directory if it doesn't exist
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory, { recursive: true });
    }

    const writer = fs.createWriteStream(filepath);

    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on("finish", resolve);
      writer.on("error", reject);
    });
  } catch (error) {
    console.error(`Error downloading ${url}: ${error}`);
  }
};

downloadImageOrVideo(
  "https://example.com/image.jpg",
  "downloads/images/folder_name"
);
