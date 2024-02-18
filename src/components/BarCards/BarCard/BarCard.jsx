import React, { useState } from 'react';
import s from './BarCard.module.scss';
import { Row, Col, Image, Typography, Modal, Button } from 'antd';
import { ReadOutlined } from '@ant-design/icons';
import { colorWithOpacity } from '../../../helpers/colorWithOpacity';
import parse from 'html-react-parser';

const { Title, Paragraph } = Typography;

export const BarCard = ({ barItem }) => {
  const [recipeModalVisible, setRecipeModalVisible] = useState(false);
  const [historyModalVisible, setHistoryModalVisible] = useState(false);

  const openRecipeModal = () => {
    setRecipeModalVisible(true);
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#8C8C8C');
  };

  const openHistoryModal = () => {
    setHistoryModalVisible(true);
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#8C8C8C');
  };

  const closeRecipeModal = () => {
    setRecipeModalVisible(false);
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#ffffff');
  };

  const closeHistoryModal = () => {
    setHistoryModalVisible(false);
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#ffffff');
  };

  return (
    <Col span={12} lg={8} xl={6} key={barItem.id}>
      <Row className={s.barCardWrapper} style={{backgroundColor: colorWithOpacity(barItem.color, 0.1)}} gutter={[0, 16]}>
        <Col span={24} className={s.barCardImageWrapper}>
          <Image src={barItem.image} preview={false} width={'100%'} />
        </Col>
        <Col span={24}>
          <Row gutter={[0, 8]}>
            <Col span={24}>
              <Title level={3} ellipsis={{rows: 1}} className={s.barCardTitle}>{barItem.name}</Title>
            </Col>
            <Col span={24}>
              <Paragraph ellipsis={{rows: 3}} className={s.barCardDescription}>{barItem.description}</Paragraph>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={18}>
              <Button type={'primary'} onClick={openRecipeModal} style={{backgroundColor: colorWithOpacity(barItem.color, 0.7)}} className={s.barCardRecipeButton}>Рецепт</Button>
            </Col>
            <Col span={6}>
              <Button type={'primary'} onClick={openHistoryModal} style={{backgroundColor: colorWithOpacity(barItem.color, 0.7)}} className={s.barCardHistoryButton}><ReadOutlined /></Button>
            </Col>
          </Row>
        </Col>
      </Row>

      <Modal
        title={<Title level={3} className={s.barCardModalTitle}>Рецепт коктейлю "{barItem.name}"</Title>}
        open={recipeModalVisible}
        onCancel={closeRecipeModal}
        footer={null}
        centered={true}
      >
        <Row gutter={[0, 8]}>
          {barItem.recipe.map((recipeItem, index) => (
            <Col span={24} key={index}>
            <Paragraph className={s.barCardIngredient}>
              {recipeItem.ingredient}
              {recipeItem.amount && <span className={s.barCardIngredientAmount}>: {recipeItem.amount}</span>}
            </Paragraph>
            </Col>
          ))}
        </Row>
      </Modal>

      <Modal
        title={<Title level={3} className={s.barCardModalTitle}>Історія коктейлю "{barItem.name}"</Title>}
        open={historyModalVisible}
        onCancel={closeHistoryModal}
        footer={null}
        centered={true}
      >
        <div className={s.barCardModalHistory}>{parse(barItem.history)}</div>
      </Modal>
    </Col>
  );
};