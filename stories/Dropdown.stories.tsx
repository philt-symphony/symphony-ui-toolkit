import * as React from 'react';
import { Dropdown, DropdownOption, Icon, LabelValue, OptionRendererProps, TagRendererProps, Typography } from '../src/components';

const defaultOptions: LabelValue[] = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
  { label: 'Option 4', value: '4' },
  { label: 'Option 5', value: '5' },
  { label: 'Option 6', value: '6' },
  { label: 'Option 7', value: '7' }
];

interface Person {
  label:string;
  value:string;
  name: string;
}

const personSelectorOptions: DropdownOption<Person>[] = [
  {
    label: 'FREQUENT CONTACTS',
    options: [
      { label: 'Emma Jones', value: '1', name: 'a' },
      { label: 'Mehmet Guest', value: '2', name: 'a' },
      { label: 'Charleigh Whitworth', value: '3', name: 'a' },
      { label: 'Hugo Svein', value: '4' , name: 'a'},
      { label: 'Alena Fedrick', value: '5', name: 'a' },
      { label: 'Philip Earl', value: '6' , name: 'a'},
      { label: 'Junita Torrey', value: '7', name: 'a' }
    ]
  }
];

const timeZoneOptions: DropdownOption<LabelValue>[] = [
  { label: '(GMT +03:00) Tanzania', value: '8' },
  { label: '(GMT +03:00) Uganda', value: '9' },
  {
    label: 'United states of America (USA)',
    options: [
      { label: '(GMT -04:00) United states of America (USA) - New York', value: '1' },
      { label: '(GMT -04:00) United states of America (USA) - Detroit', value: '2' },
      { label: '(GMT -04:00) United states of America (USA) - Menominee', value: '3' },
      { label: '(GMT -05:00) United states of America (USA) - Center', value: '4' },
    ]
  }
];

/** Icon custom renderers */
interface Icon {
  displayName:string;
  value:string;
}

const iconData: Icon[] = [
  { value: '1', displayName: 'app' },
  { value: '2', displayName: 'bot' },
  { value: '9', displayName: 'hide' },
  { value: '10', displayName: 'link' },
  { value: '3', displayName: 'adjust' },
  { value: '4', displayName: 'archive' },
  { value: '5', displayName: 'cashtag' },
  { value: '6', displayName: 'emoticon' },
  { value: '7', displayName: 'following' },
  { value: '8', displayName: 'flags' }
];

const IconPickerTagRenderer = (props: TagRendererProps<Icon>) => {
  const {data, remove} = props;
  return (
    <div>
      {data.displayName}
      <Icon className="tk-pl-1" iconName={data.displayName} />
      <Icon className="tk-ml-1" iconName="cross" onClick={remove} />
    </div>
  );
};

const IconPickerOptionRenderer = (props: OptionRendererProps<Icon>) => {
  const {data} = props;
  return (
    <div>
      {data.displayName}
      <Icon className="tk-pl-1" iconName={data.displayName} />
    </div>
  );
};

const Template = (args) => {
  return (
    <div style={{ minHeight: '260px' }}>
      <Dropdown {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  options: defaultOptions
};

export const Select: React.FC = () => (
  <div>
    <h2>Dropdown</h2>
    <h3>Default</h3>
    <Dropdown options={timeZoneOptions} iconName="recent" onChange={(value)=>{console.info(value)}}/>
    <p className="tk-mt-4">
			With <Typography variant="bold">placeholder</Typography>
    </p>
    <Dropdown options={defaultOptions} placeHolder="Select an option.." />
    <p className="tk-mt-4">
			With <Typography variant="bold">label</Typography>
    </p>
    <Dropdown options={defaultOptions} label="Field label" />
    <p className="tk-mt-4">
			Clear selection with <Typography variant="bold">isClearable</Typography>
    </p>
    <Dropdown options={defaultOptions} isInputClearable />
    <h3 className="tk-mt-4">Disabled dropdown</h3>
    <Dropdown options={defaultOptions} placeHolder="No option available" isDisabled />
    <p className="tk-mt-4">
			With <Typography variant="bold">label</Typography>
    </p>
    <Dropdown options={defaultOptions} placeHolder="No option available" isDisabled label="Field label" />
    <h3 className="tk-mt-4">Custom render</h3>
    <p>
    You can replace the default components with your own, using the <Typography variant="bold">optionRenderer </Typography>and{' '}
      <Typography variant="bold">tagRenderer </Typography>props.
    </p>
    <Dropdown
      options={iconData}
      optionRenderer={IconPickerOptionRenderer}
      tagRenderer={IconPickerTagRenderer}
      placeHolder="Select an icon.."
      label="Icon"
    />
  </div>
);

export const Multiselect: React.FC = () => (
  <div>
    <h2>Multiselect</h2>
    <h3>Default</h3>
    <Dropdown options={personSelectorOptions} isMultiSelect placeHolder="Search for People" isInputClearable/>
    <p className="tk-mt-4">
			With <Typography variant="bold">label</Typography>
    </p>
    <Dropdown options={defaultOptions} placeHolder="Search for People" label="Field label" isMultiSelect />
    <p className="tk-mt-4">
			Clear selection with <Typography variant="bold">isClearable</Typography>
    </p>
    <Dropdown options={defaultOptions} isInputClearable isMultiSelect />
    <p className="tk-mt-4">
			with <Typography variant="bold">displayArrowIndicator</Typography>
    </p>
    <Dropdown options={defaultOptions} isInputClearable isMultiSelect displayArrowIndicator />
    <h3 className="tk-mt-4">Disabled dropdown</h3>
    <Dropdown options={defaultOptions} placeHolder="No option available" isDisabled isMultiSelect />
    <Dropdown
      options={defaultOptions}
      placeHolder="No option available"
      isDisabled
      label="Field label"
      isMultiSelect
    />

    <h3 className="tk-mt-4">Custom render</h3>
    <p>
			You can replace the default components with your own, using the
      <Typography variant="bold"> optionRenderer</Typography> and
      <Typography variant="bold"> tagRenderer</Typography> props.
    </p>
    <Dropdown
      options={iconData}
      optionRenderer={IconPickerOptionRenderer}
      tagRenderer={IconPickerTagRenderer}
      placeHolder="Select an icon.."
      label="Icon ana"
      isMultiSelect
      iconName="emoticon"
      onChange={(value)=>console.info('SELECTED VALUE',value)}
    />
  </div>
);

export default {
  title: 'Components/Input/Dropdown (beta)',
  component: Dropdown
};