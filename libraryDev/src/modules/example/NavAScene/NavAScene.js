/**
 * 负责用户交互逻辑
 *
 * Created by erichua on 2019-10-24T06:08:28.443Z.
 */
import React, { Component } from 'react'
import { AppNavigator, WeBaseScene, Column } from '@webank/trident'
import EntryList from '../../../bizComponents/EntryList'
import PrimaryButton from '@webank/trident/library/uiComponent/PrimaryButton'
import NavigationStackView from '../components/NavigationStackView'
import ObjectView from '../components/ObjectView'

export default class NavAScene extends WeBaseScene {
  static navigationOptions = ({ navigation: { state: { params = {} } } }) => ({
    headerTitle: params.title || 'NavAScene'
  })

  render () {
    return (
      <Column>
        <EntryList>
          <PrimaryButton text={`Go NavBScene`} onPress={() => {
            AppNavigator.example.NavBScene()
          }} />
          <PrimaryButton text={`Back`} onPress={() => {
            AppNavigator.goBack()
          }} />
        </EntryList>

        <ObjectView ignoreKeys={[]} {...(this.params || {})} />

        <NavigationStackView routes={AppNavigator.getCurrentRoutes()} />

      </Column>
    )
  }
}
