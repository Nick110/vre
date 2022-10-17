/* eslint-disable */
// 搜索栏
import React, { useImperativeHandle } from 'react';
import {
  Form, Input, Select, TimePicker, Button, DatePicker,
} from 'antd';
import { get } from 'lodash';

import './index.less';

const { RangePicker } = DatePicker;
const { Option } = Select;
const FormItem = Form.Item;

export default function SearchBar(props) {
  const {
    config, initialValues, childRef, handleSearch,
  } = props;
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // console.log('Success:', values);
    handleSearch(values);
  };

  useImperativeHandle(childRef, () => ({
    setFormFieldsValue: (values) => {
      form.setFieldsValue(values);
    },
    resetForm: () => {
      form.resetFields();
    },
  }));

  const resetForm = () => {
    form.resetFields();
    props.resetCallback && props.resetCallback();
  };

  return (
    <div className="mgb12 search-bar">
      <Form
        // {...SIX_AND_EIGHTEEN}
        layout="inline"
        name="form"
        form={form}
        onFinish={onFinish}
        initialValues={initialValues}
      >
        {
          config.map((item, index) => {
            const {
              type, label, style, options, name, config, initialValue,
              className, nameKey = 'label', valueKey = 'value',
            } = item;
            const finalStyle = { width: 180, ...style };
            return (
              <FormItem
                key={index}
                label={label}
                name={name}
                initialValue={initialValue}
                className={className}
                style={{ marginBottom: 12 }}
              >
                {
                  (() => {
                    switch (type) {
                      case 'input':
                        return <Input allowClear style={finalStyle} />;
                      case 'select':
                        return (
                          <Select
                            allowClear
                            style={finalStyle}
                            {...config}
                          >
                            {
                              options.map((option, index) => (
                                <Option
                                  key={get(option, valueKey, index)}
                                  value={get(option, valueKey, index)}
                                >
                                  {get(option, nameKey, index)}
                                </Option>
                              ))
                            }
                          </Select>
                        );
                      case 'datePicker':
                        return (
                          <DatePicker
                            {...config}
                            style={finalStyle}
                          />
                        );
                      case 'rangePicker':
                        return (
                          <RangePicker
                            {...config}
                          />
                        );
                      default:
                        return '';
                    }
                  })()
                }
              </FormItem>
            );
          })
        }
        <Button type="primary" htmlType="submit" className="submit-button mgr12">
          查找
        </Button>
        {
          props.resetCallback ? (
            <Button type="primary" className="reset-button" onClick={resetForm}>
              重置
            </Button>
          ) : null
        }
      </Form>
    </div>
  );
}
