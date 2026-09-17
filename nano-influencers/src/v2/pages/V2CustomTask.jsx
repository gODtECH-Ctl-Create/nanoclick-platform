import React, { useMemo, useRef, useState } from "react";
import "./v2-custom-task.css";

const assets = {
  arrowLeft: "https://www.figma.com/api/mcp/asset/05c2ead2-be79-4029-a269-d25071e2a7e5.svg",
  dropdown: "https://www.figma.com/api/mcp/asset/093c0b8a-81c4-4913-ada8-d1e55f27d79a.svg",
  calendar: "https://www.figma.com/api/mcp/asset/1294e60a-b34b-496c-be85-e1df621288c8.svg",
  clock: "https://www.figma.com/api/mcp/asset/64942235-2efd-4bf7-b550-b1982a446f5f.svg",
  demoDot: "https://www.figma.com/api/mcp/asset/d53c0ec0-99ec-4c5d-a650-0c9658e78e88.svg",
  videoPreview: "https://www.figma.com/api/mcp/asset/e0583601-564c-4fd4-a8a8-fbf10dce4afd.png",
  copy: "https://www.figma.com/api/mcp/asset/3d36cb6d-9b0c-43cc-8b96-6223d45cf64a.svg",
  download: "https://www.figma.com/api/mcp/asset/55b5cf04-e24e-4a1b-861e-621a8cce0544.svg",
  upload: "https://www.figma.com/api/mcp/asset/1e442cc1-042b-4047-9050-de519d9204ac.svg",
};

const taskOptions = [1, 2, 3, 4, 5];
const stateOptions = ["All States", "Lagos", "FCT Abuja", "Rivers", "Ogun", "Oyo"];
const deliveryOptions = ["Default Time", "24 Hours", "48 Hours", "3 Days", "7 Days"];

function FieldHeader({ title, help }) {
  return (
    <div className="v2-ct-field-head">
      <h2>{title}</h2>
      {help && <p>{help}</p>}
    </div>
  );
}

function SelectField({ value, onChange, children, ariaLabel }) {
  return (
    <label className="v2-ct-select">
      <select aria-label={ariaLabel} value={value} onChange={onChange}>{children}</select>
      <img src={assets.dropdown} alt="" />
    </label>
  );
}

function TextField({ value, onChange, placeholder = "type here", type = "text", readOnly = false }) {
  return (
    <input
      className="v2-ct-input"
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      readOnly={readOnly}
    />
  );
}

function IconField({ label, icon, value, onChange }) {
  return (
    <label className="v2-ct-icon-field">
      <input aria-label={label} type="text" value={value} onChange={onChange} />
      <img src={icon} alt="" />
    </label>
  );
}

function Consent({ checked, onChange, children }) {
  return (
    <label className="v2-ct-consent">
      <span className={`v2-ct-checkbox${checked ? " is-checked" : ""}`} aria-hidden="true">{checked ? "✔" : ""}</span>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span>{children}</span>
    </label>
  );
}

export default function V2CustomTask() {
  const fileInput = useRef(null);
  const [taskCount, setTaskCount] = useState("");
  const [quantity, setQuantity] = useState("");
  const [country, setCountry] = useState("Nigeria");
  const [targetState, setTargetState] = useState("All States");
  const [delivery, setDelivery] = useState("Default Time");
  const [startDate, setStartDate] = useState("Today");
  const [startTime, setStartTime] = useState("19:00");
  const [fileName, setFileName] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [copied, setCopied] = useState(false);

  const totalQuantity = useMemo(() => {
    const tasks = Number(taskCount || 0);
    const people = Number(quantity || 0);
    return tasks && people ? String(tasks * people) : "";
  }, [taskCount, quantity]);

  const copyCashbackLink = async () => {
    try {
      await navigator.clipboard.writeText("https://nanoinfluencer.ng/ref/adaeze");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      setCopied(false);
    }
  };

  const submit = (event) => {
    event.preventDefault();
    sessionStorage.setItem("v2CustomTaskDraft", JSON.stringify({
      taskCount,
      quantity,
      totalQuantity,
      country,
      targetState,
      delivery,
      startDate,
      startTime,
      fileName,
      privacyAccepted,
      termsAccepted,
    }));
  };

  return (
    <main className="v2-ct-page">
      <div className="v2-ct-shell">
        <header className="v2-ct-backbar">
          <a href="/campaigns"><img src={assets.arrowLeft} alt="" /><span>Go Back</span></a>
        </header>

        <section className="v2-ct-demo-card">
          <div className="v2-ct-demo-head">
            <p>Watch the video below to understand how to create Custom Orders</p>
            <span><img src={assets.demoDot} alt="" />Demo</span>
          </div>
          <button className="v2-ct-video" type="button" aria-label="Play custom orders demo video">
            <img src={assets.videoPreview} alt="Custom orders demo video preview" />
          </button>
        </section>

        <form className="v2-ct-form" onSubmit={submit}>
          <section className="v2-ct-panel">
            <div className="v2-ct-field-group">
              <FieldHeader
                title="No of Tasks"
                help="This describes how many tasks you would like per user to perform at a time. Tasks. Eg. like, comment and share consist 3 Tasks. If that is the case, then select 3. The Task should come in the order you want it to be Performed."
              />
              <SelectField value={taskCount} onChange={(e) => setTaskCount(e.target.value)} ariaLabel="Number of tasks">
                <option value="">Select number of tasks</option>
                {taskOptions.map((value) => <option key={value} value={value}>{value}</option>)}
              </SelectField>
            </div>

            <div className="v2-ct-field-group">
              <FieldHeader title="Quantity" help="How many nano influencers do you want to perform the task(s)" />
              <TextField type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            </div>
          </section>

          <section className="v2-ct-panel">
            <div className="v2-ct-field-group">
              <FieldHeader title="Country of Target" help="Select the country from where you want the task to be carried out. The selection would only reach mostly people from this selected country." />
              <SelectField value={country} onChange={(e) => setCountry(e.target.value)} ariaLabel="Country of target">
                <option>Nigeria</option>
              </SelectField>
            </div>

            <div className="v2-ct-field-group">
              <FieldHeader title="State of Target" help={'Select the state from where you want the task to be carried out, this impacts on the max number of persons the task would be allocated to, and the selection would only reach mostly people from the selected state(s). Select "All" if you want to target all states in a country.'} />
              <SelectField value={targetState} onChange={(e) => setTargetState(e.target.value)} ariaLabel="State of target">
                {stateOptions.map((value) => <option key={value}>{value}</option>)}
              </SelectField>
            </div>

            <div className="v2-ct-field-group">
              <FieldHeader title="Total Quantity" help="Total number of task x quantity = Total Quantity" />
              <TextField value={totalQuantity} placeholder="type here" readOnly />
            </div>
          </section>

          <section className="v2-ct-panel">
            <div className="v2-ct-field-group">
              <FieldHeader title="How Fast do you want the job to be delivered. I want the job delivered in:" help={'Only apply if your order is time bound. Just Select "Default Time" if your campaign is not time bound.'} />
              <SelectField value={delivery} onChange={(e) => setDelivery(e.target.value)} ariaLabel="Delivery time">
                {deliveryOptions.map((value) => <option key={value}>{value}</option>)}
              </SelectField>
            </div>

            <div className="v2-ct-time-grid">
              <div>
                <h2>Start Date</h2>
                <IconField label="Start date" icon={assets.calendar} value={startDate} onChange={(e) => setStartDate(e.target.value)} />
              </div>
              <div>
                <h2>Start time</h2>
                <IconField label="Start time" icon={assets.clock} value={startTime} onChange={(e) => setStartTime(e.target.value)} />
              </div>
            </div>
          </section>

          <section className="v2-ct-panel v2-ct-cashback-panel">
            <div className="v2-ct-cashback-copy">
              <FieldHeader title="(Optional)" help="Share the link and image below on your whatsapp status to get 1% cash back on your payment = ₦0 money back." />
              <div className="v2-ct-cashback-actions">
                <button type="button" onClick={copyCashbackLink}><i><img src={assets.copy} alt="" /></i><span>{copied ? "link copied" : "click on the icon\nto copy link"}</span></button>
                <button type="button"><i><img src={assets.download} alt="" /></i><span>click on the icon to\ndownload image</span></button>
              </div>
            </div>

            <div className="v2-ct-upload-block">
              <h2>Upload the Evidence (Screen Shot) of Image and link shared on your whatsapp status</h2>
              <input ref={fileInput} type="file" accept="image/*" hidden onChange={(e) => setFileName(e.target.files?.[0]?.name || "")} />
              <button className="v2-ct-upload" type="button" onClick={() => fileInput.current?.click()}>
                <img src={assets.upload} alt="" />
                <strong>{fileName || "Choose file"}</strong>
                <span>Size limit: 25mb</span>
              </button>
            </div>
          </section>

          <section className="v2-ct-panel v2-ct-terms">
            <h2>Terms & Conditions</h2>
            <Consent checked={privacyAccepted} onChange={(e) => setPrivacyAccepted(e.target.checked)}>I have read and agreed to privacy policy for all tasks.</Consent>
            <Consent checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)}>I have read and agreed to terms and condition.</Consent>
          </section>

          <button className="v2-ct-proceed" type="submit">Proceed</button>
        </form>
      </div>
    </main>
  );
}
