/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export interface RegistrationProps {
  isLate: boolean;
  isHackathonStartedAuth: boolean;
  regLink: string;
  handleRegisterClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface ProblemStatement {
  id: string;
  title: string;
  desc: string;
  color: string;
}

export interface ScheduleItem {
  title: string;
  time: string;
}

export interface AITool {
  name: string;
  desc: string;
  color: string;
  tag: string;
  link: string;
}
