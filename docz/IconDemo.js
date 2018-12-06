import React, { Component } from 'react';

import TextField from '../src/TextField';
import Checkbox from '../src/Checkbox';
import Slider from '../src/Slider';
import Form, { FormControl, FormControlLabel } from '../src/Form';

import BananaIcon from 'calcite-ui-icons-react/BananaIcon';
import BasemapIcon from 'calcite-ui-icons-react/BasemapIcon';
import RunningIcon from 'calcite-ui-icons-react/RunningIcon';
import BatteryChargingIcon from 'calcite-ui-icons-react/BatteryChargingIcon';
import ThreeDGlassesIcon from 'calcite-ui-icons-react/ThreeDGlassesIcon';

export default class IconDemo extends Component {
  state = {
    size: 200,
    color: 'tomato',
    filled: false
  };

  render() {
    return (
      <div>
        <Form horizontal>
          <FormControl>
            <FormControlLabel>Color:</FormControlLabel>
            <TextField
              type="text"
              value={this.state.color}
              style={{ width: '150px' }}
              onChange={e =>
                this.setState({ color: e.target.value || undefined })
              }
            />
          </FormControl>

          <FormControl>
            <FormControlLabel>Size:</FormControlLabel>
            <TextField
              type="number"
              value={this.state.size}
              style={{ width: '150px' }}
              onChange={e =>
                this.setState({ size: e.target.value || undefined })
              }
            />
            <Slider
              min={0}
              max={500}
              value={this.state.size}
              onChange={e =>
                this.setState({ size: e.target.value || undefined })
              }
            />
          </FormControl>

          <FormControl>
            <FormControlLabel>Filled:</FormControlLabel>
            <Checkbox
              checked={this.state.filled}
              onChange={e => this.setState({ filled: e.target.checked })}
            />
          </FormControl>
        </Form>
        <div style={{ textAlign: 'center' }}>
          <BananaIcon
            size={this.state.size}
            color={this.state.color}
            filled={this.state.filled}
          />
          <BasemapIcon
            size={this.state.size}
            color={this.state.color}
            filled={this.state.filled}
          />
          <RunningIcon
            size={this.state.size}
            color={this.state.color}
            filled={this.state.filled}
          />
          <ThreeDGlassesIcon
            size={this.state.size}
            color={this.state.color}
            filled={this.state.filled}
          />
          <BatteryChargingIcon
            size={this.state.size}
            color={this.state.color}
            filled={this.state.filled}
          />
        </div>
      </div>
    );
  }
}
