import React from 'react';
import Chart from '../components/Charts/Chart';
import MapBox from '../components/Map/MapBox';
import ExportBoard from '../components/Panels/ExportBoard/ExportBoard';
import Panel from '../components/Panels/Panel/Panel';
import Select from '../components/Select/Select';
import './App.scss';

const App = () => {
  return (
    <div className='wrapper'>
      <div className='dashboard'>
        <h2 className='dashboard-title h2'>Enterprise Shiny Dashboard</h2>
        <div className='dashboard-panels'>
          <Panel value='$2 674 862' name='total profit' difference='+4.5%' type='increased'>
            <Select options={options} icon='database' boxType='primary' />
          </Panel>
          <Panel value='657' name='active users' difference='+8.5%' type='increased'>
            <Select options={options} icon='user-o' boxType='success' />
          </Panel>
          <Panel value='$245' name='new orders' difference='+3.9%' type='increased'>
            <Select options={options} icon='th-large' boxType='warning' />
          </Panel>
          <Panel value='12' name='open complaints' difference='-5.3%' type='decreased'>
            <Select options={options} icon='ellipsis' boxType='danger' />
          </Panel>
        </div>
        <div className='dashboard-boxes'>
          <div className='dashboard-column'>
            <div className='dashboard-box'>
              <div className='dashboard-box-title flex'>
                <h3>Production</h3>
                <ExportBoard />
              </div>
              <Chart composed height={160} />
            </div>
            <div className='dashboard-box'>
              <div className='dashboard-box-title'>
                <h3>Summary</h3>
              </div>
              <Chart layout='vertical' height={100} />
            </div>
          </div>
          <div className='dashboard-column'>
            <div className='dashboard-box'>
              <div className='dashboard-box-title flex'>
                <h3>sales revenue by country</h3>
                <ExportBoard />
              </div>
              <MapBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const options = [{ name: 'Monthly Stats', id: 'monthly' }, { name: 'Yearly Stats', id: 'yearly' }];

export default App;
