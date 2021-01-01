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
    this.props.onProfileChange(e);
  }
  
  render() {
    return (
      <div id="profileSelector">
        <label htmlFor="profile">Select a profile: </label>
        <select name="profile" onChange={this.handleChange}>
          <option value="">Default</option>
          <option value="secondBite">SecondBite</option>
          <option value="axil">Axil Coffee Roasters</option>
          <option value="myer">MYER</option>
        </select>
      </div>
    );
  }
}

export default Profile;
