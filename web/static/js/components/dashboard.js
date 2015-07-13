class Dashboard extends React.Component {
  render() {
    console.log('neko', this);
    setTimeout(() => {
      this.neko();
    }, 1000);

    // request update 
    return (
      <div>
        Dashboard
      </div>
    );
  }
  neko() {
    // console.log(this.getDOMNode());
  }
}

export default Dashboard
