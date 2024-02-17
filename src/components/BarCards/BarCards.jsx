import React, { useState } from 'react';
import { Row, Col, Tabs } from 'antd';
import Section from '../Section/Section';
import Container from '../Container/Container';
import barData from '../../data/bar-menu.json';
import itemTypes from '../../data/item-types.json';
import { BarCard } from './BarCard/BarCard';
import s from './BarCards.module.scss';

export const BarCards = () => {
  const [activeTab, setActiveTab] = useState('strong');

  const handleTabChange = (key) => {
    setActiveTab(key);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const filteredBarData = barData.filter(item => item.type === activeTab).sort((a, b) => a.id - b.id);

  return (
    <div>
      <div className={s.tabsWrapper}>
        <Container>
          <Row>
            <Col span={24}>
              <Tabs defaultActiveKey="strong" items={itemTypes} onChange={handleTabChange}/>
            </Col>
          </Row>
        </Container>
      </div>
    <Section>
      <Container>
        <Row>
          <Col span={24}>
            <Row gutter={[12, 12]}>
              {filteredBarData.map((item, index)=>(
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
