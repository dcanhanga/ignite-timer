import { PiPlay } from 'react-icons/pi';

import * as C from './styles';
export const Home = () => {
  return (
    <C.HomeContainer>
      <C.FromContainer id="formCountdown">
        <C.InputGroups>
          <label htmlFor="task">Vou trabalhar em</label>
          <C.Task type="text" id="task" list="task-suggestions" />

          <datalist id="task-suggestions">
            <option value="Estudar Typescript"></option>
            <option value="Fazer o café"></option>
            <option value="Revisar nodejs"></option>
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <C.MinutesAmount
            type="number"
            id="minutesAmount"
            step={5}
            min={5}
            max={60}
          />
          <p>minutos.</p>
        </C.InputGroups>
      </C.FromContainer>
      <C.Countdown>
        <span>0</span>
        <span>0</span>
        <span className="divider">:</span>
        <span>0</span>
        <span>0</span>
      </C.Countdown>
      <C.Control type="submit" form="formCountdown" disabled={true}>
        <PiPlay size={24} /> Enviar
      </C.Control>
    </C.HomeContainer>
  );
};
