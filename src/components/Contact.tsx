function Contact() {
  return (
    <div className="section" style={{ marginBottom: "20px" }}>
      <h1 className="display-3">Contact me</h1>
      <hr />
      <form id="contact-form" method="POST">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1" style={{ fontSize: "1.2rem" }}>
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            style={{ backgroundColor: "#111111", color: "white" }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message" style={{ fontSize: "1.2rem" }}>
            Message
          </label>
          <textarea
            className="form-control"
            style={{
              minHeight: "200px",
              backgroundColor: "#111111",
              color: "white",
            }}
          ></textarea>
        </div>

        <button className="button-bw" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
