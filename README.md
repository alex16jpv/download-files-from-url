# Node.js File Downloader with Axios

This repository provides a simple example of how to download files using Node.js with Axios.

## Installation

To get started, clone this repository and install the necessary dependencies:

```bash
$ git clone https://github.com/alex16jpv/download-files-from-url.git
$ cd download-files-from-url
$ npm install
```

## Usage

Once you have installed the dependencies, you can run the file downloader by executing the following command:

```bash
$ node index.js <FILE_URL> [DOWNLOAD_FOLDER]
```

Replace <FILE_URL> with the URL of the file you want to download. If you specify the optional [DOWNLOAD_FOLDER] parameter, the downloaded file will be saved in the specified folder. If you omit [DOWNLOAD_FOLDER], the file will be saved in the ./downloads folder by default.

## Example

Here's an example of how to download a file using this script:

```bash
$ node index.js https://example.com/sample.pdf ./downloads
```

This command will download the "sample.pdf" file from the given URL and save it in the "downloads" folder.
