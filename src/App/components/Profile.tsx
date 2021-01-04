import {
  Dropdown,
  Stack,
} from 'braid-design-system';
import React from 'react';

interface ProfileProps {
  onProfileChange: Function;
}

class Profile extends React.Component<ProfileProps, {}> {
  constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: any) {
    this.props.onProfileChange(e.target.value);
  }

  render() {
    return (
      <div id="profileSelector" className="profileSelector">
        <Stack space="medium">
          <Dropdown
            id="profile"
            label="Profile"
            onChange={this.handleChange}
            // TODO: I'm sure something is supposed to go in `value`, but I don't know what...
            value={console.log('')}
            placeholder="Please select a profile"
          >
            <option value="secondBite">SecondBite</option>
            <option value="axil">Axil Coffee Roasters</option>
            <option value="myer">MYER</option>
          </Dropdown>
        </Stack>
      </div>
    );
  }
}

export default Profile;
