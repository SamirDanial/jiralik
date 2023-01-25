import Image from "next/image";
import dashboard from "../../assets/iconsImg/icons/dashboard.png";
import workFlow from "../../assets/iconsImg/icons/workflow.png";
import calendar from "../../assets/iconsImg/icons/calendar.png";
import socialrm from "../../assets/iconsImg/icons/socialRM.png";
import metrics from "../../assets/iconsImg/icons/metrics.png";
import leads from "../../assets/iconsImg/icons/leads.png";
import users from "../../assets/iconsImg/icons/users.png";
import notification from "../../assets/iconsImg/icons/notifications.png";
import document from "../../assets/iconsImg/icons/documents.png";
import segment from "../../assets/iconsImg/icons/segments.png";
import company from "../../assets/iconsImg/icons/company.png";
import downarrow from "../../assets/iconsImg/downarrow2.png";
import doubleleftarrow from "../../assets/iconsImg/doubleleftarrow2.png";
import question from "../../assets/iconsImg/icons/question.png";
import search from "../../assets/iconsImg/search.png";
import loudspeaker from "../../assets/iconsImg//icons/loudspeaker.png";
import message from "../../assets/iconsImg/icons/message.png";
import workflow2 from "../../assets/iconsImg/workflow3.png";
import pen from "../../assets/iconsImg/pen2.png";
import closetag from "../../assets/iconsImg/closetag.png";
import loudspeaker2 from "../../assets/iconsImg/loudspeaker2.png";
import pin from "../../assets/iconsImg/icons/pin.png";
import folder from "../../assets/iconsImg/icons/archive.png";
import floppy from "../../assets/iconsImg/icons/floppy.png";
import filter from "../../assets/iconsImg/icons/filter.png";
import filter2 from "../../assets/iconsImg/icons/filter2.png";
import sortby from "../../assets/iconsImg/icons/sort.png";
import sortby2 from "../../assets/iconsImg/icons/sort2.png";
import more from "../../assets/iconsImg/icons/more.png";
import leftalignment from "../../assets/iconsImg/icons/leftalign.png";
import user from "../../assets/iconsImg/icons/user.png";
import searchuser from "../../assets/iconsImg/icons/searchuser.png";
import paidbill from "../../assets/iconsImg/icons/donelist.png";
import checklist from "../../assets/iconsImg/icons/todo.png";
import sms12 from "../../assets/iconsImg/icons/sms12.png";
import chain2 from "../../assets/iconsImg/icons/chain2.png";
import bulletlist from "../../assets/iconsImg/bulletlist.png";
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

export const Filter2Icon = ({ width, height, onClick }: IconType) => {
  return (
    <div>
      <Image
        priority
        src={filter2}
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

export const Sort2Icon = ({ width, height, onClick }: IconType) => {
  return (
    <div>
      <Image
        priority
        src={sortby2}
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

export const Sms12Icon = ({ width, height }: IconType) => {
  return (
    <div>
      <Image
        priority
        src={sms12}
        alt="SMS 12 icon"
        width={width}
        height={height}
      />
    </div>
  );
};

export const Chain2Icon = ({ width, height }: IconType) => {
  return (
    <div>
      <Image
        priority
        src={chain2}
        alt="chain 2 icon"
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
