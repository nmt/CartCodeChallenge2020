import React from 'react';

interface ProfileProps {
  onProfileChange?: Function;
}

type ProfileState = {
  profile: string,
}

class Profile extends React.Component<ProfileProps, ProfileState> {
  constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      profile: '',
    };
  }

  handleChange(e: any) {
    this.props.onProfileChange?.(e.target.value);

    this.setState({
      profile: e.target.value,
    });
  }
  
  render() {
    return (
      <div id="profileSelector" className="profileSelector">
        <label htmlFor="profile">Select a profile: </label>
        <select name="profile" onChange={this.handleChange}>
          <option ref="" value="">Default</option>
          <option ref="secondBite" value="secondBite">SecondBite</option>
          <option ref="axil" value="axil">Axil Coffee Roasters</option>
          <option ref="myer" value="myer">MYER</option>
        </select>
      </div>
    );
  }
}

export default Profile;
