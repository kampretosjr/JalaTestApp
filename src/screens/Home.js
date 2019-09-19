/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import {  View, AsyncStorage as storage, TouchableOpacity, StyleSheet ,FlatList } from 'react-native'
import { Button,Icon, Text, Container, Body, Right,Spinner, List, ListItem,} from 'native-base';
// import {TouchableOpacity} from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import {  getUdang } from '../public/redux/actions/shrimpPrice'
import FooterComponent from '../components/Footer';
import HeaderComponent from '../components/Header';
import ModalComponent from '../components/Modal';

class Home extends Component {
    constructor(props) {
			super(props)

			this.state = {
        isModalVisible: false,
				isLoading: true,
				noteS: [],
        filterCount: 0,
        sortStat:'desc',
        buttonStats:'',
        title:'Harga udang di kota anda',
        HargaUdang:[],
        searchWord:'',
        time:false
			}
    }

    componentDidMount = async () => {
      const {searchWord,sortStat} = this.state

        await this.props.dispatch(getUdang(searchWord,sortStat))
  
        this.setState({	HargaUdang: this.props.shrimPrice })  
    }

    sortHandle = async (data) => {
      const {searchWord,sortStat} = this.state

      await this.props.dispatch(getUdang(searchWord,sortStat))

      this.setState({
        sortStat:data,
        HargaUdang: this.props.shrimPrice
      })
    }

    searchHandle = async (data) => {
      await this.props.dispatch(getUdang(this.state.searchWord,this.state.sortStat))

       this.setState({
        HargaUdang: this.props.shrimPrice,
        searchWord:data,
      })
      
      // setTimeout(() => {
      //   this.setState({
      //     time:false,
      //   })
      // }, 5000)

      // if (this.state.time == false) {
      //   this.setState({
      //     HargaUdang: this.props.shrimPrice
      //   })
      // }
    }

    angkaRP = (angka) => {
      var rupiah = '';
      var angkarev = angka.toString().split('').reverse().join('');
      for (var i = 0; i < angkarev.length; i++) if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + '.';
      return 'Rp. ' + rupiah.split('', rupiah.length - 1).reverse().join('');
    };

    toggleModal = () => {
      this.setState({
        isModalVisible: !this.state.isModalVisible
      })
    }

    modalHandle = (val) => {
      this.setState({
        buttonStats: val,
        isModalVisible: !this.state.isModalVisible,
      })
    }

    buttonStats = (value) => {
      this.setState({ buttonStats:value })
    }

    render() {
        return (
					<Container>
            <HeaderComponent title='Harga Udang' subtitle="Ukuran 100"/>
            {this.state.HargaUdang == [] ? 
              <Text>Belum ada penjual di daerah ini</Text>
              : <></>
            }
              <FlatList
              data={this.state.HargaUdang}
              keyExtractor={item => item.id}
              renderItem={({ item, index }) => {
                return (
                  // <TouchableOpacity onPress={()=> this.props.navigation.navigate('Detail', { data: item })} >
                  <TouchableOpacity  >
                    <ListItem onPress={()=> this.props.navigation.navigate('DetailHarga', { data: item })} thumbnail>
                      <Body>
                        <Text style={{fontWeight: "bold"}}>{this.angkaRP(item.size_100)}</Text>
                        {item.region.regency_name == null ?
                          <Text note numberOfLines={1} style={{color:'#1a77df',fontWeight:'bold'}}>{item.region.province_name}</Text>  :
                          <>
                            <Text note numberOfLines={1} style={{color:'#1a77df',fontWeight:'bold'}}>{item.region.regency_name}</Text>
                            <Text note numberOfLines={1} style={{color:'#1a77df',fontWeight:'bold'}}>{item.region.province_name} </Text>
                          </>
                        }
                        <Text></Text>
                        <Text note numberOfLines={1}>{item.date}</Text>
                      </Body>

                      <Right>
                        <Button transparent>
                          <Icon style={{color:'#6d7fa3'}} name='share' />
                        </Button>
                        <Text note>
                          Selengkapnya
                          <Icon style={{color:'#6d7fa3'}} name='arrow-dropright' />
                        </Text>
                      </Right>
                    </ListItem>
                  </TouchableOpacity>
                );
              }}
            />

           

            <ModalComponent parentCallback={this.sortHandle} searchCallback={this.searchHandle} toggleModal={()=> this.toggleModal()} visibility={this.state.isModalVisible} buttonID={this.state.buttonStats}/>
            <FooterComponent 
              sortStatus={this.state.sortStat} 
              filterStatus={this.state.searchWord} 
              modalFilter={() => this.modalHandle('filter')} 
              modalSort={() => this.modalHandle('sort')} />
						{/* <Fab	style={{ backgroundColor: '#5067FF' }}	onPress={() => this.props.navigation.navigate('s')}>
							<Icon name="add" />
						</Fab> */}
					</Container>
        )
    }
}
const mapStateToProps = state => {
	return {
			shrimPrice: state.INshrimpPrice.ListHargaUdang.data,
	}
}

export default connect(mapStateToProps)(Home)
// export default Home

const styles = StyleSheet.create({
  button: {
    top: "0%",
    left: "0%",
    width: "50%",
    height: "100%",
    position: "absolute"
  },
  icon2: {
    left: "9.6%",
    position: "absolute",
    color: "rgba(250,250,250,1)",
    fontSize: 40,
    width: "18.66%",
    height: "71.43%",
    top: "14.28%"
  },
  text2: {
    top: "12.5%",
    left: "33.34%",
    width: "60.26%",
    height: "40%",
    color: "rgba(250,250,250,1)",
    position: "absolute",
    fontSize: 20
  },
  subtextkiri: {
    top: "65%",
    left: "33.34%",
    width: "60.26%",
    height: "28.57%",
    color: "rgba(250,250,250,1)",
    position: "absolute",
    fontSize: 12
  },
  button2: {
    top: "0%",
    left: "50%",
    width: "50%",
    height: "100%",
    position: "absolute"
  },
  icon3: {
    left: "9.6%",
    position: "absolute",
    color: "rgba(250,250,250,1)",
    fontSize: 40,
    width: "18.66%",
    height: "71.43%",
    top: "14.28%"
  },
  text4: {
    top: "12.5%",
    left: "33.34%",
    width: "60.26%",
    height: "40%",
    color: "rgba(250,250,250,1)",
    position: "absolute",
    fontSize: 20
  },
  subtextkanan: {
    top: "65%",
    left: "33.34%",
    width: "60.26%",
    height: "28.57%",
    color: "rgba(250,250,250,1)",
    position: "absolute",
    fontSize: 12
  },
  FlatList: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center"
  },
  item: {
    backgroundColor: "black",
    margin: 15,
    borderRadius: 8,
    elevation: 6,
    width: 145,
    height: 215
  }
});
