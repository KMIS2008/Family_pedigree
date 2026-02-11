import React, { useState, useEffect, useCallback } from "react";
import { Container, List, Item, TitleChapter, Svg } from "./Schedule.styled";
import { useSelector, useDispatch } from "react-redux";
import { selectSchedule } from "redux/schedule/selects";
import { deleteSchedule, fetchSchedule } from "redux/operations";
import { selectPassword } from 'redux/check/selects';
import { useLocation } from "react-router-dom";
import sprite from '../../images/sprite.svg';

export const ServiceHighlighter = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const schedule = useSelector(selectSchedule);
  const password = useSelector(selectPassword);

  const [currentService, setCurrentService] = useState(null);
  const [nextService, setNextService] = useState(null);

  const updateServices = useCallback(() => {
    const now = new Date();
    const sortedServices = [...schedule].sort((a, b) => {
      const dateA = new Date(`${a.date}T${a.time}`);
      const dateB = new Date(`${b.date}T${b.time}`);
      return dateA - dateB;
    });

    let current = null;
    let next = null;

    for (const service of sortedServices) {
      const serviceTime = new Date(`${service.date}T${service.time}`);
      const serviceEndTime = new Date(serviceTime.getTime() + 2 * 60 * 60 * 1000);
      if (serviceTime <= now && now < serviceEndTime) {
        current = service;
        break;
      } else if (serviceTime > now) {
        next = service;
        if (!current) break;
      }
    }

    setCurrentService(current);
    setNextService(next);
  }, [schedule]);

  useEffect(() => {
    dispatch(fetchSchedule());
  }, [dispatch]);

  useEffect(() => {
    updateServices();
    const interval = setInterval(updateServices, 60 * 1000);
    return () => clearInterval(interval);
  }, [updateServices]);

  const sortedSchedule = [...schedule].sort((a, b) => {
    const dateA = new Date(`${a.date}T${a.time}`);
    const dateB = new Date(`${b.date}T${b.time}`);
    return dateA - dateB;
  });

  return (
    <Container>
      <TitleChapter>Розклад богослужінь</TitleChapter>
      <List>
       {sortedSchedule.map((service) => {
  const isCurrent = currentService && currentService._id === service._id;
  const isNext = nextService && nextService._id === service._id;

  const bgColor = isCurrent ? "green" : isNext ? "orange" : "transparent";
  const textColor = isCurrent || isNext ? "white" : "black";
  const flex = password.success && location.pathname === '/schedule';

  return (
    <Item
      key={service._id}
      $bgColor={bgColor}
      $color={textColor}
      $flex={flex}
    >
      <span>
        {service.date} <strong>{service.title}</strong> - {service.time}
      </span>
      {(isCurrent || isNext) && (
        <span>{isCurrent ? " (Триває зараз)" : " (Наступне)"}</span>
      )}
      {password.success && location.pathname === '/schedule' && (
        <Svg width={32} height={32} onClick={() => dispatch(deleteSchedule(service._id))}>
          <use xlinkHref={sprite + '#icon-dump'} />
        </Svg>
      )}
    </Item>
  );
})}
      </List>
    </Container>
  );
};