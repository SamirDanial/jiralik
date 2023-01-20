import Image from "next/image";
import dashboard from "../../assets/iconsImg/dashboard.png";
import workFlow from "../../assets/iconsImg/workFlow.png";
import calendar from "../../assets/iconsImg/calendar.png";
import socialrm from "../../assets/iconsImg/socialrm.png";
import metrics from "../../assets/iconsImg/metrics.png";
import leads from "../../assets/iconsImg/leads.png";
import users from "../../assets/iconsImg/users.png";
import notification from "../../assets/iconsImg/notification.png";
import document from "../../assets/iconsImg/document.png";
import segment from "../../assets/iconsImg/segment.png";
import company from "../../assets/iconsImg/company.png";
import downarrow from "../../assets/iconsImg/downarrow2.png";
import doubleleftarrow from "../../assets/iconsImg/doubleleftarrow2.png";
import question from "../../assets/iconsImg/question.png";
import search from "../../assets/iconsImg/search.png";
import loudspeaker from "../../assets/iconsImg/loudspeaker.png";
import message from "../../assets/iconsImg/message.png";

type IconType = {
  width: number;
  height: number;
};

export const DashboardIcon = ({ width, height }: IconType) => {
  return (
    <div>
      <Image
        priority
        src={dashboard}
        alt="Dashboard icon"
        width={width}
        height={height}
      />
    </div>
  );
};

export const WorkflowIcon = ({ width, height }: IconType) => {
  return (
    <div>
      <Image
        priority
        src={workFlow}
        alt="workFlow icon"
        width={width}
        height={height}
      />
    </div>
  );
};

export const CalendarIcon = ({ width, height }: IconType) => {
  return (
    <div>
      <Image
        priority
        src={calendar}
        alt="calendar icon"
        width={width}
        height={height}
      />
    </div>
  );
};

export const SocialRMIcon = ({ width, height }: IconType) => {
  return (
    <div>
      <Image
        priority
        src={socialrm}
        alt="social RM icon"
        width={width}
        height={height}
      />
    </div>
  );
};

export const MetricsIcon = ({ width, height }: IconType) => {
  return (
    <div>
      <Image
        priority
        src={metrics}
        alt="metrics icon"
        width={width}
        height={height}
      />
    </div>
  );
};

export const LeadsIcon = ({ width, height }: IconType) => {
  return (
    <div>
      <Image
        priority
        src={leads}
        alt="leads icon"
        width={width}
        height={height}
      />
    </div>
  );
};

export const UsersIcon = ({ width, height }: IconType) => {
  return (
    <div>
      <Image
        priority
        src={users}
        alt="users icon"
        width={width}
        height={height}
      />
    </div>
  );
};

export const NotificationIcon = ({ width, height }: IconType) => {
  return (
    <div>
      <Image
        priority
        src={notification}
        alt="notification icon"
        width={width}
        height={height}
      />
    </div>
  );
};

export const DocumentIcon = ({ width, height }: IconType) => {
  return (
    <div>
      <Image
        priority
        src={document}
        alt="document icon"
        width={width}
        height={height}
      />
    </div>
  );
};

export const SegmentIcon = ({ width, height }: IconType) => {
  return (
    <div>
      <Image
        priority
        src={segment}
        alt="segment icon"
        width={width}
        height={height}
      />
    </div>
  );
};

export const CompanyIcon = ({ width, height }: IconType) => {
  return (
    <div>
      <Image
        priority
        src={company}
        alt="company icon"
        width={width}
        height={height}
      />
    </div>
  );
};

export const SingleDownArrowIcon = ({ width, height }: IconType) => {
  return (
    <div>
      <Image
        priority
        src={downarrow}
        alt="down arrow icon"
        width={width}
        height={height}
      />
    </div>
  );
};

export const DoubleLeftArrowIcon = ({ width, height }: IconType) => {
  return (
    <div>
      <Image
        priority
        src={doubleleftarrow}
        alt="double left arrow icon"
        width={width}
        height={height}
      />
    </div>
  );
};

export const QuestionIcon = ({ width, height }: IconType) => {
  return (
    <div>
      <Image
        priority
        src={question}
        alt="question icon"
        width={width}
        height={height}
      />
    </div>
  );
};

export const SearchIcon = ({ width, height }: IconType) => {
  return (
    <div>
      <Image
        priority
        src={search}
        alt="search icon"
        width={width}
        height={height}
      />
    </div>
  );
};

export const LoudSpeakerIcon = ({ width, height }: IconType) => {
  return (
    <div>
      <Image
        priority
        src={loudspeaker}
        alt="loud speaker icon"
        width={width}
        height={height}
      />
    </div>
  );
};

export const MessageIcon = ({ width, height }: IconType) => {
  return (
    <div>
      <Image
        priority
        src={message}
        alt="message icon"
        width={width}
        height={height}
      />
    </div>
  );
};


