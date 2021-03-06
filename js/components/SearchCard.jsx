import React, { Component } from 'react';
import styled from 'styled-components';
import getGif from '../scripts/getGif';

const Card = styled.div`
  display: inline-block;
  perspective: 1000px;
  width: 300px;
  margin-left: 32px;
  margin-right: 32px;
  margin-bottom: 40px;
`;

const CardInner = styled.div`
  position: relative;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  transform: ${props => (props.isFlipped ? 'rotateY(180deg)' : 'rotateY(0)')};
  box-shadow: 0px 5px 13px -1px rgba(0,0,0,0.20);
  border-radius: 3px;
`;

const CardTitle = styled.h2`
  color: #DC143C;
  margin: 0 0 8px;
  font-size: 20px;
  font-weight: normal;
`;

const CardInformationFront = styled.div`
  padding: 16px;
  font-size: 15px;
  color: #444;
  border-radius: 3px;
`;

const SearchInput = styled.input`
  margin-bottom: 0;
  padding: 12px;
  border: 0;
  width: 100%;
  border: 2px solid #5b4df2;
`;

const Checkbox = styled.input`
  opacity: 0;
  margin-bottom: 8px;
  display: none;

  &:hover,
  &:focus {
    + label {
      box-shadow: 0px 0px 0px 2px #877eea inset;
    }
  }

  &:checked {
    + label {
      background-color: #E3E4FA;
      border: 2px solid #5b4df2;
      color: #5b4df2;
    }
  }
`;

const CheckboxLabel = styled.label`
  border-radius: 32px;
  border: 2px solid #E0E0E0;
  color: grey;
  background-color: white;
  padding: 8px 16px;
  margin: 2px;
`;

const CardButton = styled.button`
  margin: 0 0 0 auto;
  display: block;
  border-radius: 16px;
  border: 0;
  background-image: linear-gradient(to right, #877eea, #5b4df2);
  padding: 8px 24px;
  color: white;
  box-shadow: 0px 5px 13px -1px rgba(0, 0, 0, 0.20);

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 2px #3b2aeb inset;
  }

  &:active {
    transform: translateY(2px);
  }
`;

const GifImg = styled.img`
  width: 100%;
  margin-bottom: 8px;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 16px 0;
`;

class SearchCard extends Component {
  constructor(...args) {
    super(...args);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleBackToSearch = this.handleBackToSearch.bind(this);
    this.state = {
      searchActive: true,
      gifUrl: '',
      searchQuery: '',
      filters: [],
    };
  }

  handleSubmit() {
    const searchQuery = `${this.state.searchQuery} ${this.state.filters.join(' ')}`;

    getGif(searchQuery).then((res) => {
      this.setState({ gifUrl: res.data.data[0].images.original.url });
    });

    this.setState({ searchActive: false });
  }

  handleBackToSearch() {
    this.setState({
      searchActive: true,
      filters: [],
    });
  }

  handleSearchChange(event) {
    this.setState({ searchQuery: event.target.value });
  }

  handleChange(event) {
    if (!this.state.filters.includes(event.target.value)) {
      const selectedCheckboxes = [...this.state.filters, event.target.value];
      this.setState({ filters: selectedCheckboxes });
    }
  }

  render() {
    let cardContent;

    if (this.state.searchActive) {
      cardContent = (
        <form>
          <SearchInput placeholder="Search Gif" type="text" onChange={this.handleSearchChange} />
          <CheckboxWrapper>
            <Checkbox id="1" type="checkbox" name="vehicle1" value="Bike" onChange={this.handleChange} />
            <CheckboxLabel htmlFor="1">Bike</CheckboxLabel>

            <Checkbox id="2" type="checkbox" name="vehicle2" value="Skateboard" onChange={this.handleChange} />
            <CheckboxLabel htmlFor="2">Skateboard</CheckboxLabel>

            <Checkbox id="3" type="checkbox" name="vehicle3" value="Boat" onChange={this.handleChange} />
            <CheckboxLabel htmlFor="3">Boat</CheckboxLabel>

            <Checkbox id="4" type="checkbox" name="vehicle4" value="Ship" onChange={this.handleChange} />
            <CheckboxLabel htmlFor="4">Ship</CheckboxLabel>

            <Checkbox id="5" type="checkbox" name="vehicle5" value="Plane" onChange={this.handleChange} />
            <CheckboxLabel htmlFor="5">Plane</CheckboxLabel>

            <Checkbox id="6" type="checkbox" name="vehicle6" value="Car" onChange={this.handleChange} />
            <CheckboxLabel htmlFor="6">Car</CheckboxLabel>

            <Checkbox id="7" type="checkbox" name="vehicle7" value="Scooter" onChange={this.handleChange} />
            <CheckboxLabel htmlFor="7">Scooter</CheckboxLabel>

            <Checkbox id="8" type="checkbox" name="vehicle8" value="Skates" onChange={this.handleChange} />
            <CheckboxLabel htmlFor="8">Skates</CheckboxLabel>
          </CheckboxWrapper>
          <CardButton type="submit" onClick={this.handleSubmit}>Search</CardButton>
        </form>
      );
    } else {
      cardContent = (
        <div>
          <GifImg src={this.state.gifUrl} alt="" />
          <CardButton onClick={this.handleBackToSearch}>Back to search</CardButton>
        </div>
      );
    }

    return (
      <Card>
        <CardTitle>Search and Filters</CardTitle>
        <CardInner>
          <CardInformationFront>
            {cardContent}
          </CardInformationFront>
        </CardInner>
      </Card>
    );
  }
}

export default SearchCard;
