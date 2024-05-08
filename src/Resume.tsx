import resumeFile from "./assets/RaymondXiaResume.pdf";

function Resume() {
  return (
    <div>
      <iframe src={resumeFile} width="100%" height="1000px" />
    </div>
  );
}

export default Resume;
