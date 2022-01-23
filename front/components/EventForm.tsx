import { Form, Input, DatePicker, Select, FormInstance } from "antd";
import { ReactElement, useEffect, useRef, useState } from "react";
import moment from "moment";
import useSWR from "swr";
import { eventLocalFetcher } from "fetcher/event";
import { EventType } from "types/event";

interface EventFormPropsType {
  onSubmit: (data: EventType) => void;
  curEvent: EventType | undefined;
  formId: string;
}

const EventForm = ({
  onSubmit,
  curEvent,
  formId,
}: EventFormPropsType): ReactElement => {
  return (
    <Form
      onFinish={onSubmit}
      id={formId}
      initialValues={{
        eventTitle: curEvent?.title ? curEvent.title : "",
        eventDate: curEvent?.start
          ? [moment(curEvent?.start), moment(curEvent?.end)]
          : [moment(curEvent?.date), moment(curEvent?.date)],
        eventUrl: curEvent?.url ? curEvent?.url : "",
        eventId: curEvent?.id ? curEvent?.id : "",
      }}
    >
      <Form.Item label="제목" name="eventTitle" required>
        <Input type="text" />
      </Form.Item>
      <Form.Item label="날짜" name="eventDate" required>
        <DatePicker.RangePicker
          format="YY/MM/DD HH:mm"
          showTime={{ format: "HH:mm" }}
        />
      </Form.Item>
      <Form.Item label="링크" name="eventUrl">
        <Input type="url" />
      </Form.Item>
      <Form.Item label="id" name="eventId" hidden>
        <Input type="text" />
      </Form.Item>
    </Form>
  );
};

export default EventForm;