import React, { useState, useEffect } from 'react';
import { Row, Col, Tabs } from 'antd';
import menuStrongData from '../../data/menu-strong.json';
import menuLightData from '../../data/menu-light.json';
import itemTypes from '../../data/item-types.json';
import {scrollToTop} from '../../helpers/scrollToTop';
import Section from '../Section/Section';
import Container from '../Container/Container';
import { BarCard } from './BarCard/BarCard';
import s from './BarCards.module.scss';

const lastActiveTab = localStorage.getItem('activeTab');
export const BarCards = () => {
  const [activeTab, setActiveTab] = useState(lastActiveTab || 'strong');
  const [activeData, setActiveData] = useState([]);

  useEffect(() => {
    const lastActiveTab = localStorage.getItem('activeTab');
    setActiveTab(lastActiveTab || 'strong');
  }, []);

  useEffect(() => {
    localStorage.setItem('activeTab', activeTab);

    if (activeTab === 'strong') {
      setActiveData(menuStrongData.sort((a, b) => a.id - b.id).sort((a, b) => b.available - a.available));
    } else if (activeTab === 'light') {
      setActiveData(menuLightData.sort((a, b) => a.id - b.id).sort((a, b) => b.available - a.available));
    }
  }, [activeTab]);

  useEffect(() => {
    scrollToTop();
  }, [activeTab, activeData]);

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  const handleTabClick = () => {
    scrollToTop();
  };

  return (
    <div>
      <div className={s.tabsWrapper}>
        <Container>
          <Row>
            <Col span={24}>
              <Tabs defaultActiveKey={activeTab} items={itemTypes} onChange={handleTabChange} onTabClick={handleTabClick}/>
            </Col>
          </Row>
        </Container>
      </div>
      <Section>
        <Container>
          <Row>
            <Col span={24}>
              <Row gutter={[8, 8]}>
                {activeData.map((item, index)=>(
                  <BarCard barItem={item} key={index}/>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </Section>
    </div>
  );
};
