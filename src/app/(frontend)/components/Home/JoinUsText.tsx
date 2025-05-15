import "./Home.css";
interface JoinUsTextProps {
  htmlContent: string;
}
export default function JoinUsText({ htmlContent }: JoinUsTextProps) {
  return (
    <div className="join-us-text" dangerouslySetInnerHTML={{ __html: htmlContent }}>
    </div>
  );
}