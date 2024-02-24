import React, { useState } from 'react';
import s from './HookahCard.module.scss';
import { Row, Col, Image, Typography, Modal, Button } from 'antd';
import { colorWithOpacity } from '../../../helpers/colorWithOpacity';

const { Title, Paragraph } = Typography;
const greyColor = '#808080';
const themeColor = document.querySelector('meta[name="theme-color"]');

export const HookahCard = ({ hookahItem }) => {
  const [recipeModalVisible, setRecipeModalVisible] = useState(false);

  const handleRecipeModal = (isOpen) => {
    setRecipeModalVisible(isOpen);
    themeColor.setAttribute('content', isOpen ? '#8C8C8C' : '#ffffff');
  };

  return (
    <Col span={12} lg={8} xl={6} key={hookahItem.id}>
      <Row className={s.hookahCardWrapper}
           style={{backgroundColor: hookahItem.available
               ? colorWithOpacity(hookahItem.color, 0.1)
               : colorWithOpacity(greyColor, 0.1)}}
           gutter={[0, 16]}
      >
        <Col span={24}>
          <Row gutter={[0, 16]}>
            <Col span={24} className={s.hookahCardImageWrapper}>
              <Image src={hookahItem.image}
                     style={{filter: hookahItem.available
                         ? ''
                         : 'grayscale(100%)'}}
                     preview={false}
                     width={'100%'}
              />
            </Col>
            <Col span={24}>
              <Row gutter={[0, 8]}>
                <Col span={24}>
                  <Title level={3} ellipsis={{rows: 1}} className={s.hookahCardTitle}>{hookahItem.name}</Title>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col span={24} style={{alignSelf:'flex-end'}}>
          <Row>
            <Col span={24}>
              <Row gutter={[16, 16]}>
                <Col span={24}>
                  <Button
                    type={'primary'}
                    onClick={()=>handleRecipeModal(true)}
                    style={{backgroundColor: hookahItem.available
                        ? colorWithOpacity(hookahItem.color, 0.7)
                        : colorWithOpacity(greyColor, 0.7)}}
                    className={s.hookahCardRecipeButton}>
                    Детальніше
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>

      {!hookahItem.available &&
        <Row className={s.cardMessageWrapper}>
          <Paragraph className={s.notAvailableText} style={{color:greyColor}}>Немає в наявності</Paragraph>
        </Row>
      }

      <Modal
        title={<Title level={3} className={s.hookahCardModalTitle}>Смак "{hookahItem.name}"</Title>}
        open={recipeModalVisible}
        onCancel={()=>handleRecipeModal(false)}
        footer={null}
        centered={true}
      >
        <Row gutter={[0, 8]}>
          {hookahItem.recipe.map((recipeItem, index) => (
            <Col span={24} key={index}>
            <Paragraph className={s.hookahCardIngredient}>
              {recipeItem.characteristic}
              {recipeItem.value && <span className={s.hookahCardIngredientAmount}>: {recipeItem.value}</span>}
            </Paragraph>
            </Col>
          ))}
        </Row>
      </Modal>
    </Col>
  );
};
