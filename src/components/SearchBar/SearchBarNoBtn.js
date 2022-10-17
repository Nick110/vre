// 搜索栏
import React from 'react';
import { Form, Input, Select, TimePicker, DatePicker } from 'antd';
import { get } from 'lodash';

const { RangePicker } = DatePicker;
const { Option } = Select;
const { Search } = Input;
const FormItem = Form.Item;

export default function SearchBarNoBtn(props) {
  const { config, handleSearch, className, style, initialValues } = props;
  const [form] = Form.useForm();

  const search = () => {
    const values = form.getFieldsValue();
    handleSearch(values);
  };

  return (
    <div className={`search-bar ${className || ''}`} style={style}>
      <Form
        layout="inline"
        name="form"
        form={form}
        initialValues={initialValues}
      >
        {
          config.map((item, index) => {
            let {
              type, label, style, options, name, placeholder,
              nameKey = 'label', valueKey = 'value', initialValue,
              noHandler = false,
            } = item;
            let searchStyle = { width: 280, ...style };
            let selectStyle = { width: 200, ...style };
            return (
              <FormItem
                key={index}
                label={label}
                name={name}
                initialValue={initialValue}
              >
                {
                  (() => {
                    switch (type) {
                      case 'input':
                        return (
                          <Input
                            style={searchStyle}
                            placeholder={placeholder || '请输入'}
                            allowClear
                          />
                        );
                      case 'search':
                        return (
                          <Search
                            placeholder={placeholder}
                            style={searchStyle}
                            onSearch={search}
                            allowClear
                          />
                        );
                      case 'select':
                        return (
                          <Select
                            allowClear
                            placeholder={placeholder || '请选择'}
                            style={selectStyle}
                            onChange={noHandler ? () => {} : search}
                          >
                            {
                              options.map((option, index) => (
                                <Option key={get(option, valueKey, index)} value={get(option, valueKey, index)}>
                                  {get(option, nameKey, index)}
                                </Option>
                              ))
                            }
                          </Select>
                        );
                      case 'mutiSelect':
                        return (
                          <Select
                            mode="multiple"
                            allowClear
                            placeholder={placeholder || '请选择'}
                            style={selectStyle}
                            onChange={noHandler ? () => {} : search}
                          >
                            {
                              options.map((option, index) => (
                                <Option key={get(option, valueKey, index)} value={get(option, valueKey, index)}>
                                  {get(option, nameKey, index)}
                                </Option>
                              ))
                            }
                          </Select>
                        );
                      case 'rangePicker':
                        return (
                          <RangePicker
                            onChange={noHandler ? () => {} : search}
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
      </Form>
    </div>
  );
}
