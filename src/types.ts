export interface Task {
  id: string;
  text: string;
  completed: boolean;
  timerState?: TimerState;
}

export interface TimerState {
  isRunning: boolean;
  isPaused: boolean;
  timeRemaining: number; // in seconds
  duration: number; // in seconds (default: 25 minutes = 1500 seconds)
}



