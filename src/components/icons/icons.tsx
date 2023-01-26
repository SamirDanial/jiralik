import Image from "next/image";
import dashboard from "../../assets/svgIcon/dashboard.svg";
import workflow from "../../assets/svgIcon/workflow.svg";
import workflowwhite from "../../assets/svgIcon/workflowwhite.svg";
import calendar from "../../assets/svgIcon/calendar.svg";
import socialrm from "../../assets/svgIcon/socialrm.svg";
import metrics from "../../assets/svgIcon/metrics.svg";
import leads from "../../assets/svgIcon/leads.svg";
import users from "../../assets/svgIcon/users.svg";
import notification from "../../assets/svgIcon/notifications.svg";
import document from "../../assets/svgIcon/documents.svg";
import segment from "../../assets/svgIcon/segments.svg";
import company from "../../assets/svgIcon/company.svg";
import downarrow from "../../assets/svgIcon/downarrow.svg";
import doubleleftarrow from "../../assets/svgIcon/doubleleftarrow.svg";
import question from "../../assets/svgIcon/question.svg";
import search from "../../assets/svgIcon/search.svg";
import loudspeaker from "../../assets/svgIcon/annoucement.svg";
import message from "../../assets/svgIcon/message.svg";
import pen from "../../assets/svgIcon/design.svg";
import closetag from "../../assets/svgIcon/code.svg";
import pin from "../../assets/svgIcon/pinned.svg";
import folder from "../../assets/svgIcon/folder.svg";
import floppy from "../../assets/svgIcon/save.svg";
import filter from "../../assets/svgIcon/filter.svg";
import sortby from "../../assets/svgIcon/sort.svg";
import more from "../../assets/svgIcon/more.svg";
import leftalignment from "../../assets/svgIcon/leftalignment.svg";
import user from "../../assets/svgIcon/users.svg";
import searchuser from "../../assets/svgIcon/searchuser.svg";
import paidbill from "../../assets/svgIcon/billdone.svg";
import checklist from "../../assets/svgIcon/todo.svg";
import sms from "../../assets/svgIcon/sms.svg";
import chain from "../../assets/svgIcon/chain.svg";
import donelist from '../../assets/svgIcon/checklist2.svg';
import samplelist from '../../assets/svgIcon/samplelist.svg';
import { TrashIcon, ArchiveBoxIcon, ClockIcon, ListBulletIcon, QueueListIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";

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
        src={workflow}
        alt="workFlow icon"
        width={width}
        height={height}
      />
    </div>
  );
};

export const WorkFlowWhiteIcon = ({ width, height }: IconType) => {
  return (
    <div>
      <Image
        priority
        src={workflowwhite}
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

export const PenIcon = ({ width, height }: IconType) => {
  return (
    <div>
      <Image priority src={pen} alt="pen icon" width={width} height={height} />
    </div>
  );
};

export const CloseTagIcon = ({ width, height, onClick }: IconType) => {
  return (
    <div>
      <Image
        priority
        src={closetag}
        alt="close tag icon"
        width={width}
        height={height}
        onClick={onClick}
      />
    </div>
  );
};

export const PinIcon = ({ width, height, onClick }: IconType) => {
  return (
    <div onClick={onClick}>
      <Image priority src={pin} alt="pin icon" width={width} height={height} />
    </div>
  );
};

export const FolderIcon = ({ width, height, onClick }: IconType) => {
  return (
    <div>
      <Image
        priority
        src={folder}
        alt="folder icon"
        width={width}
        height={height}
        onClick={onClick}
      />
    </div>
  );
};

export const FloppyIcon = ({ width, height, onClick }: IconType) => {
  return (
    <div>
      <Image
        priority
        src={floppy}
        alt="floppy icon"
        width={width}
        height={height}
        onClick={onClick}
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

export const UserSearchIcon = ({ width, height }: IconType) => {
  return (
    <div>
      <Image
        priority
        src={searchuser}
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

export const SmsIcon = ({ width, height }: IconType) => {
  return (
    <div>
      <Image
        priority
        src={sms}
        alt="SMS icon"
        width={width}
        height={height}
      />
    </div>
  );
};

export const ChainIcon = ({ width, height }: IconType) => {
  return (
    <div>
      <Image
        priority
        src={chain}
        alt="chain icon"
        width={width}
        height={height}
      />
    </div>
  );
};

export const DoneListIcon = ({ width, height }: IconType) => {
  return (
    <div>
      <Image
        priority
        src={donelist}
        alt="bullet list icon"
        width={width}
        height={height}
      />
    </div>
  );
};

export const SampleListIcon = ({ width, height }: IconType) => {
  return (
    <div>
      <Image
        priority
        src={samplelist}
        alt="bullet list icon"
        width={width}
        height={height}
      />
    </div>
  );
};

export const TrashBinIcon = ({ width, height, onClick }: IconType) => {
  return <TrashIcon onClick={onClick} width={width} height={height} />;
};

export const ArchiveIcon = ({ width, height, onClick }: IconType) => {
  return <ArchiveBoxIcon onClick={onClick} width={width} height={height} />;
};

export const SnoozeIcon = ({ width, height, onClick }: IconType) => {
  return <ClockIcon onClick={onClick} width={width} height={height} />;
};

export const ListIcon = ({ width, height, onClick }: IconType) => {
  return <ListBulletIcon onClick={onClick} width={width} height={height} />;
};

export const QueueIcon = ({ width, height, onClick }: IconType) => {
  return <QueueListIcon onClick={onClick} width={width} height={height} />;
};

export const PlusCIcon = ({ width, height, onClick }: IconType) => {
  return <PlusIcon onClick={onClick} width={width} height={height} />;
};

export const XMarkCIcon = ({ width, height, onClick }: IconType) => {
  return <XMarkIcon onClick={onClick} width={width} height={height} />;
};
