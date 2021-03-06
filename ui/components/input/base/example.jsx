// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import ButtonIcon from '../../button-icons/';
import classNames from 'classnames';
import { Spinner } from '../../spinners/base/example';
import {
  FormElement,
  SimpleFormElementWrapper,
  FormElementControl
} from '../../form-element';

const inputLabel = 'Input Label';
const inputId = 'text-input-id-1';
const errorId = 'error-message-unique-id';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

export let Input = props => {
  return (
    <input
      {...props}
      id={props.id || inputId}
      className={classNames('slds-input', props.className)}
      type={props.type || 'text'}
      placeholder={props.placeholder}
      readOnly={props['readOnly']}
      defaultValue={props.defaultValue}
    />
  );
};

/// ///////////////////////////////////////////
// State Constructor(s)
/// ///////////////////////////////////////////

let Required = props => (
  <FormElement labelContent={inputLabel} inputId={inputId} isRequired>
    <Input id={inputId} required />
  </FormElement>
);

let ErrorState = props => (
  <FormElement
    hasError
    labelContent={inputLabel}
    inputId={inputId}
    errorId={props.errorId}
    isRequired
    inlineMessage="This field is required"
  >
    <Input id={inputId} required aria-describedby={props.errorId} />
  </FormElement>
);

let ErrorIcon = props => (
  <FormElement
    hasError
    labelContent={inputLabel}
    inputId={inputId}
    hasLeftIcon
    errorId={props.errorId}
    isRequired
    inlineMessage="This field is required"
  >
    <SvgIcon className="slds-input__icon" sprite="utility" symbol="error" />
    <Input id={inputId} required aria-describedby={props.errorId} />
  </FormElement>
);

let Disabled = props => (
  <FormElement labelContent={inputLabel} inputId={inputId}>
    <Input id={inputId} disabled />
  </FormElement>
);

let Readonly = props => (
  <FormElement labelContent={inputLabel} inputId={inputId}>
    <Input id={inputId} readOnly defaultValue="Read Only" placeholder="" />
  </FormElement>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default (
  <FormElement labelContent={inputLabel} inputId={inputId}>
    <Input id={inputId} />
  </FormElement>
);

export let states = [
  {
    id: 'input-required',
    label: 'Required',
    element: <Required />
  },
  {
    id: 'input-disabled',
    label: 'Disabled',
    element: <Disabled />
  },
  {
    id: 'input-error',
    label: 'Error',
    element: <ErrorState errorId={errorId} />
  },
  {
    id: 'input-error-icon',
    label: 'Error with icon',
    element: <ErrorIcon errorId={errorId} />
  },
  {
    id: 'read-only',
    label: 'Readonly',
    element: <Readonly />
  },
  {
    id: 'static',
    label: 'Static',
    element: (
      <SimpleFormElementWrapper>
        <span className="slds-form-element__label">Input Label</span>
        <FormElementControl>
          <span className="slds-form-element__static">Read Only</span>
        </FormElementControl>
      </SimpleFormElementWrapper>
    )
  }
];

export let examples = [
  {
    id: 'left-icon',
    label: 'Left Icon',
    element: (
      <FormElement labelContent={inputLabel} inputId={inputId} hasLeftIcon>
        <SvgIcon
          className="slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default"
          sprite="utility"
          symbol="search"
        />
        <Input id={inputId} />
      </FormElement>
    )
  },
  {
    id: 'right-icon',
    label: 'Right Icon',
    element: (
      <FormElement labelContent={inputLabel} inputId={inputId} hasRightIcon>
        <SvgIcon
          className="slds-icon slds-input__icon slds-input__icon_right slds-icon-text-default"
          sprite="utility"
          symbol="search"
        />
        <Input id={inputId} />
      </FormElement>
    )
  },
  {
    id: 'double-icon',
    label: 'Left Icon & Clear Button',
    element: (
      <FormElement
        labelContent={inputLabel}
        inputId={inputId}
        hasLeftIcon
        hasRightIcon
      >
        <SvgIcon
          className="slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default"
          sprite="utility"
          symbol="search"
        />
        <Input id={inputId} />
        <ButtonIcon
          symbol="clear"
          className="slds-input__icon slds-input__icon_right"
          iconClassName="slds-icon-text-light"
          assistiveText="Clear"
          title="Clear"
        />
      </FormElement>
    )
  },
  {
    id: 'double-icon-spinner',
    label: 'Clear Button with Spinner',
    element: (
      <FormElement
        labelContent={inputLabel}
        inputId={inputId}
        hasLeftIcon
        hasRightIcon
        hasRightIconGroup
      >
        <SvgIcon
          className="slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default"
          sprite="utility"
          symbol="search"
        />
        <Input id={inputId} />
        <div className="slds-input__icon-group slds-input__icon-group_right">
          <Spinner className="slds-spinner_brand slds-spinner_x-small slds-input__spinner" />
          <ButtonIcon
            symbol="clear"
            className="slds-input__icon slds-input__icon_right"
            iconClassName="slds-icon-text-light"
            assistiveText="Clear"
            title="Clear"
          />
        </div>
      </FormElement>
    )
  },
  {
    id: 'fixed-text',
    label: 'Fixed text',
    element: (
      <FormElement
        labelContent={inputLabel}
        inputId={inputId}
        formControlClassName="slds-input-has-fixed-addon"
        labelId="fixed-text-label"
      >
        <span className="slds-form-element__addon" id="fixed-text-addon-pre">
          $
        </span>
        <Input
          id={inputId}
          aria-labelledby="fixed-text-label fixed-text-addon-pre fixed-text-addon-post"
        />
        <span className="slds-form-element__addon" id="fixed-text-addon-post">
          euro
        </span>
      </FormElement>
    )
  },
  {
    id: 'inline-help',
    label: 'Inline Help',
    element: (
      <FormElement
        labelId="inline-text-label"
        labelContent={inputLabel}
        inputId={inputId}
      >
        <Input id={inputId} aria-labelledby="inline-text-label" />
        <div className="slds-form-element__help">ex: (415)111-2222</div>
      </FormElement>
    )
  },
  {
    id: 'field-level-help',
    label: 'Field level help',
    element: (
      <div
        style={{
          paddingTop: '3rem',
          position: 'relative'
        }}
      >
        <FormElement
          labelContent={inputLabel}
          inputId={inputId}
          hasTooltip
          showTooltip
        >
          <Input id={inputId} />
        </FormElement>
      </div>
    )
  },
  {
    id: 'increment-decrement-counter',
    label: 'Counter',
    element: (
      <FormElement
        formElementClassName="slds-text-align_center"
        labelContent={inputLabel}
        inputId={inputId}
        labelClassName="slds-m-right_none"
      >
        <ButtonIcon
          className="slds-button_icon-small slds-input__button_decrement"
          symbol="ban"
          assistiveText={'Decrement counter'}
          title={'Decrement counter'}
        />
        <Input
          className="slds-input_counter"
          id={inputId}
          type="number"
          placeholder={1}
        />
        <ButtonIcon
          className="slds-button_icon-small slds-input__button_increment"
          symbol="new"
          assistiveText={'Increment counter'}
          title={'Increment counter'}
        />
      </FormElement>
    )
  }
];
