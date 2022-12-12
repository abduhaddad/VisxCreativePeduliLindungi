import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { myColors } from './src/Components/BaseComponent';

export default function App() {


  return (
    <View style={asdasd.container}>
      {/* Header */}
      <View style={asdasd.containerHeader}>
        {/* Image Profile */}
        <Image style={asdasd.imgProfile}
          source={require('./src/Assets/Images/profile.jpeg')} />

        {/* Nama & Status */}
        <View style={asdasd.containerProfile}>
          <Text style={asdasd.profileName}>Abdullah Haddad</Text>
          <View style={asdasd.containerStatus}>
            <Text style={asdasd.titleStatus}>Status Covid 19 : </Text>
            <Text style={asdasd.status}>NEGATIF</Text>
          </View>
        </View>

        <View style={asdasd.containerNotif}>
          <Image style={asdasd.iconNotif}
            source={require('./src/Assets/Images/Combined-Shape.png')} />
        </View>
      </View>

      {/* Touoc */}
      <TouchableOpacity style={asdasd.containerVaccine}>
        <View style={asdasd.leftVaccine} />
        <View style={asdasd.containerTxtVaccine}>
          <Text style={asdasd.titleVaccine}>Sertifikat vaksin</Text>
          <Text style={asdasd.dosisVaccine}>2 dosis vaksinasi</Text>
        </View>
        <View style={asdasd.containerIconRight}>
          <Image style={asdasd.iconRight}
            source={require('./src/Assets/Images/Stroke-1.png')} />
        </View>
      </TouchableOpacity>

      <View style={asdasd.containerContent}>
        <Text style={asdasd.titleContent}>Kunjungan anda</Text>
        <View style={asdasd.containerLocCheck}>
          <View style={asdasd.containerLocation}>
            <Image style={asdasd.iconRight} source={require('./src/Assets/Images/pin_drop.png')} />
            <View style={asdasd.containerTxtLocation}>
              <Text style={asdasd.titleLocation}>Mega Mall Batam Center</Text>
              <Text style={asdasd.descLocation}>Batam, Kepulauan Riau</Text>
            </View>
          </View>

          <View style={asdasd.containerCheckIn}>
            <View>
              <Text style={asdasd.titleCheckin}>Check-in</Text>
              <Text style={asdasd.timeCheckin}>24 Mar - 8:56 WIB</Text>
            </View>
            <TouchableOpacity style={asdasd.btnCheckout}>
              <Text style={asdasd.txtBtnCheckout}>Check-Out</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Membuat garis abu" sebagai pemisah layout pada desain */}
        {/* <View style={asdasd.separator} /> */}

        <View style={asdasd.containerBtnMenu}>
          {/* Menu 1 */}
          <TouchableOpacity style={asdasd.btnMenu}>
            <Image style={asdasd.imgBtnMenu}
              source={require('./src/Assets/Images/calendar.png')} />
            <Text style={asdasd.txtBtnMenu}>Riwayat Check-In</Text>
          </TouchableOpacity>

          {/* Menu 2 */}
          <TouchableOpacity style={asdasd.btnMenu}>
            <Image style={asdasd.imgBtnMenu}
              source={require('./src/Assets/Images/tescovid.png')} />
            <Text style={asdasd.txtBtnMenu}>Test Covid</Text>
          </TouchableOpacity>

          {/* Menu 3 */}
          <TouchableOpacity style={asdasd.btnMenu}>
            <Image style={asdasd.imgBtnMenu}
              source={require('./src/Assets/Images/vaksinasi.png')} />
            <Text style={asdasd.txtBtnMenu}>Pendaftaran Vaksinasi</Text>
          </TouchableOpacity>

          {/* Menu 4 */}
          <TouchableOpacity style={asdasd.btnMenu}>
            <Image style={asdasd.imgBtnMenu}
              source={require('./src/Assets/Images/Category.png')} />
            <Text style={asdasd.txtBtnMenu}>Lainnya</Text>
          </TouchableOpacity>
        </View>

        {/* Informasi Covid */}
        <View style={asdasd.containerInformasi}>
          <Text style={asdasd.titleContent}>Informasi Covid-19</Text>
        </View>

        {/* ScrollView berfungsi untuk menampung view dll agar bisa discroll secara vertikal 
        maupun horizontal, jika ingin secara horizontal maka properti horizontal harus 
        diubah menjadi true, atau cukup panggil saja property tersebut sebagai contoh
        <ScrollView horizontal style={asdasd.containerCardCovid}>
        sedangkan showsHorizontalScrollIndicator={false} berfungsi untuk 
        menghilangkan indikator scroll silahkan coba jika properti tersebut 
        dihilangkan untuk mengetahui perbedaannya
        */}
        <ScrollView horizontal={true} 
        showsHorizontalScrollIndicator={false}
        style={asdasd.containerCardCovid}>
          {/* Menu 1 */}
          <TouchableOpacity style={asdasd.cardCovid}>
            <Text style={asdasd.txtCardCovid}>Manfaat Vaksinasi Covid-19</Text>
            <Image
              style={asdasd.imageCardCovid}
              source={require('./src/Assets/Images/Vaccine.png')} />
          </TouchableOpacity>
          {/* Menu 2 */}
          <TouchableOpacity style={asdasd.cardCovid}>
            <Text style={asdasd.txtCardCovid}>Manfaat Penggunaan Masker</Text>
            <Image
              style={asdasd.imageCardCovid}
              source={require('./src/Assets/Images/Mask.png')} />
          </TouchableOpacity>
        </ScrollView>

        <TouchableOpacity style={asdasd.containerScan}>
          <Image
            style={asdasd.iconScan}
            source={require('./src/Assets/Images/Combined-Shape-1.png')} />
          <Text style={asdasd.txtScan}>Scan QR Code</Text>
        </TouchableOpacity>
      </View>


    </View>
  )
}

const asdasd = StyleSheet.create({
  separator: {
    backgroundColor: '#F7F7F7',
    height: 4,
    marginVertical : 16,
    borderRadius : 8
  },
  txtScan: {
    fontSize: 20,
    color: '#F9F9F9',
    fontWeight: '500',
    marginLeft: 8
  },
  iconScan: {
    resizeMode: 'contain',
    width: 25,
    height: 25,
  },
  containerScan: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: myColors.darkBlue,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 24
  },
  txtCardCovid: {
    color: myColors.darkBlue,
    fontSize: 16,
    flex: 1,
    marginLeft: 16,
    fontWeight: '700'
  },
  imageCardCovid: {
    resizeMode: 'contain',
    width: 120,
    height: 120,
  },
  cardCovid: {
    width: 200,
    height: 110,
    flexDirection: 'row',
    backgroundColor: myColors.transparentBlue,
    alignItems: 'center',
    borderRadius: 12,
    marginRight: 16
  },
  containerCardCovid: {
    marginTop: 16,
  },
  containerInformasi: {
    marginTop: 24
  },
  containerLocCheck: {
    borderWidth: 1,
    borderColor: '#E9E9E9',
    borderRadius: 12,
    paddingHorizontal: 24,
    paddingVertical: 12,
    marginTop: 16
  },
  txtBtnMenu: {
    color: myColors.blue,
    textAlign: 'center',
    marginTop: 8
  },
  imgBtnMenu: {
    resizeMode: 'contain',
    width: 40,
    height: 40,
    padding: 16,
    borderRadius: 8
  },
  containerBtnMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24
  },
  btnMenu: {
    alignItems: 'center',
    flex: 1,
  },
  txtBtnCheckout: {
    color: myColors.blue,
    fontWeight: '700'
  },
  titleCheckin: {
    color: myColors.green,
    fontWeight: '700',
  },
  timeCheckin: {
    color: myColors.green,
  },
  btnCheckout: {
    borderWidth: 2,
    borderColor: myColors.blue,
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  containerCheckIn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8
  },
  containerTxtLocation: {
    marginLeft: 12
  },
  titleLocation: {
    color: myColors.blue,
    fontWeight: '700',
    fontSize: 16
  },
  descLocation: {
    color: myColors.lightBlue
  },
  containerLocation: {
    flexDirection: 'row',
  },
  containerContent: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginTop: 32,
    padding: 24
  },
  titleContent: {
    color: myColors.lightBlue,
    fontSize: 20,
    fontWeight: '700'
  },
  containerIconRight: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: 16
  },
  iconRight: {
    resizeMode: 'contain',
    width: 24,
    height: 24
  },
  containerTxtVaccine: {
    marginLeft: 16,
    marginVertical: 12
  },
  leftVaccine: {
    backgroundColor: myColors.darkBlue,
    width: 12,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8
  },
  dosisVaccine: {
    color: '#FFF',
    backgroundColor: myColors.green,
    paddingHorizontal: 16,
    width: 140,
    borderRadius: 8
  },
  titleVaccine: {
    fontWeight: '700',
    color: '#FFF',
    fontSize: 24
  },
  containerVaccine: {
    flexDirection: 'row',
    backgroundColor: myColors.blue,
    marginHorizontal: 24,
    borderRadius: 8,

    marginTop: 24
  },
  containerNotif: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  iconNotif: {
    resizeMode: 'contain',
    width: 24,
    height: 24
  },
  status: {
    backgroundColor: myColors.green,
    paddingHorizontal: 16,
    color: '#FFF',
    borderRadius: 8
  },
  containerStatus: {
    flexDirection: 'row'
  },
  titleStatus: {
    color: '#F9F9F9'
  },
  containerProfile: {
    marginLeft: 12
  },
  profileName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FFF'
  },
  containerHeader: {
    flexDirection: 'row',
    marginTop: 54,
    marginHorizontal: 24,
  },
  imgProfile: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  container: {
    flex: 1,
    backgroundColor: myColors.lightBlue
  }
})