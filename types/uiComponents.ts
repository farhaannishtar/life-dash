type SleepScoreProps = {
  score: number;
};

type SleepTimeCardProps = {
  title: string;
  body: string;
  borderColor: string;
  textColor: string;
  bgColor: string;
};

interface PhysicalStatsCardProps {
  emoji: string;
  title: string;
  body: any;
  unit: string;
  borderColor: string;
  textColor: string;
  bgColor: string;
}

interface HabitStreakCardProps {
  streak: number;
  borderColor: string;
  textColor: string;
  bgColor: string;
}

export type {
  SleepScoreProps,
  SleepTimeCardProps,
  PhysicalStatsCardProps,
  HabitStreakCardProps,
};
