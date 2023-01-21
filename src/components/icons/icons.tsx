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
import workflow2 from "../../assets/iconsImg/workflow3.png";
import pen from "../../assets/iconsImg/pen2.png";
import closetag from "../../assets/iconsImg/closetag.png";
import loudspeaker2 from "../../assets/iconsImg/loudspeaker2.png";
import pin from "../../assets/iconsImg/pin.png";
import folder from "../../assets/iconsImg/folder.png";
import floppy from "../../assets/iconsImg/floppy.png";
import filter from "../../assets/iconsImg/filter.png";
import sortby from '../../assets/iconsImg/sortby.png';
import more from '../../assets/iconsImg/more.png';
import leftalignment from '../../assets/iconsImg/leftalignment.png';
import user from '../../assets/iconsImg/user.png';
import paidbill from '../../assets/iconsImg/paidbill.png';
import checklist from '../../assets/iconsImg/checklist.png';
import bulletlist from '../../assets/iconsImg/bulletlist.png';

type IconType = {
  width: number;
  height: number;
  onClick?: any;
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

export const Workflow2Icon = ({ width, height }: IconType) => {
  return (
    <div>
      <Image
        priority
        src={workflow2}
        alt="work flow2 icon"
        width={width}
        height={height}
      />
    </div>
  );
};

export const PenIcon = ({ width, height }: IconType) => {
  return (
    <div>
      <Image
        priority
        src={pen}
        alt="pen icon"
        width={width}
        height={height}
      />
    </div>
  );
};

export const CloseTagIcon = ({ width, height }: IconType) => {
  return (
    <div>
      <Image
        priority
        src={closetag}
        alt="close tag icon"
        width={width}
        height={height}
      />
    </div>
  );
};

export const LoudSpeaker2Icon = ({ width, height }: IconType) => {
  return (
    <div>
      <Image
        priority
        src={loudspeaker2}
        alt="loud speaker2 icon"
        width={width}
        height={height}
      />
    </div>
  );
};

export const PinIcon = ({ width, height }: IconType) => {
  return (
    <div>
      <Image
        priority
        src={pin}
        alt="pin icon"
        width={width}
        height={height}
      />
    </div>
  );
};

export const FolderIcon = ({ width, height }: IconType) => {
  return (
    <div>
      <Image
        priority
        src={folder}
        alt="folder icon"
        width={width}
        height={height}
      />
    </div>
  );
};

export const FloppyIcon = ({ width, height }: IconType) => {
  return (
    <div>
      <Image
        priority
        src={floppy}
        alt="floppy icon"
        width={width}
        height={height}
      />
    </div>
  );
};

export const FilterIcon = ({ width, height, onClick }: IconType) => {
  return (
    <div>
      <Image
        priority
        src={filter}
        alt="filter icon"
        width={width}
        height={height}
        onClick={onClick}
      />
    </div>
  );
};

export const SortIcon = ({ width, height, onClick }: IconType) => {
  return (
    <div>
      <Image
        priority
        src={sortby}
        alt="sort icon"
        width={width}
        height={height}
        onClick={onClick}
      />
    </div>
  );
};

export const MoreIcon = ({ width, height, onClick }: IconType) => {
  return (
    <div>
      <Image
        priority
        src={more}
        alt="more icon"
        width={width}
        height={height}
        onClick={onClick}
      />
    </div>
  );
};

export const LeftAlignmentIcon = ({ width, height }: IconType) => {
  return (
    <div>
      <Image
        priority
        src={leftalignment}
        alt="left alignment icon"
        width={width}
        height={height}
      />
    </div>
  );
};

export const UserIcon = ({ width, height }: IconType) => {
  return (
    <div>
      <Image
        priority
        src={user}
        alt="user icon"
        width={width}
        height={height}
      />
    </div>
  );
};

export const PaidBillIcon = ({ width, height }: IconType) => {
  return (
    <div>
      <Image
        priority
        src={paidbill}
        alt="paid bill icon"
        width={width}
        height={height}
      />
    </div>
  );
};

export const CheckListIcon = ({ width, height }: IconType) => {
  return (
    <div>
      <Image
        priority
        src={checklist}
        alt="check list icon"
        width={width}
        height={height}
      />
    </div>
  );
};

export const BulletListIcon = ({ width, height }: IconType) => {
  return (
    <div>
      <Image
        priority
        src={bulletlist}
        alt="bullet list icon"
        width={width}
        height={height}
      />
    </div>
  );
};
