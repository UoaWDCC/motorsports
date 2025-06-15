import "./Home.css";
import { JoinUsTextProps } from '../../types/home';

export default function JoinUsText({ htmlContent }: JoinUsTextProps) {
  return (
    <div className="join-us-text" dangerouslySetInnerHTML={{ __html: htmlContent }}>
    </div>
  );
}