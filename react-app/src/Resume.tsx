import resumeFile from "./assets/RaymondXiaResume2023.pdf";

function Resume() {
  return (
    <div>
      <iframe src={resumeFile} width="100%" height="1000px" />
    </div>
  );
}

export default Resume;
