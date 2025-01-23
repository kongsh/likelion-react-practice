import { useState } from 'react';
import FormInput from '@/components/form-input.tsx';
import FormRadioOrCheckbox from '@/components/form-radio-or-checkbox.tsx';

const formStyles = {
  display: 'flex',
  flexFlow: 'column',
  alignItems: 'center',
  gap: '8px',
};

function ReactForm() {
  const [age, setAge] = useState(22);
  const [color, setColor] = useState('#0000de');
  const [limitAge, setLimitAge] = useState(40);

  return (
    <div className="ReactForm">
      <h2>React 폼(form)</h2>
      <form style={formStyles}>
        <FormInput type="text" label="이름" placeholder="박수무당" />
        <FormInput
          type="password"
          label="비밀번호"
          placeholder="영문, 숫자 조합 4자리 이상"
        />
        <FormInput type="email" label="이메일" placeholder="user@company.io" />
        <FormInput
          type="number"
          label="나이"
          value={age}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const { value } = e.target;
            const nextAgeValue = Number(value);
            setAge(nextAgeValue);
          }}
        />
        <FormInput
          type="color"
          label="색상"
          value={color}
          onChange={(e) => {
            const { value } = e.target;
            setColor(value);
          }}
        />
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <FormInput
            type="range"
            label="시청 허용 나이"
            min={10}
            max={90}
            step={10}
            value={limitAge}
            onChange={(e) => {
              const { value } = e.target;
              setLimitAge(parseInt(value, 10));
            }}
            title={`현재 값: ${limitAge}세`}
          />
          <output>{limitAge}</output>
        </div>

        <FormInput label="프로필" type="file" accept="image/*" multiple />

        <fieldset>
          <legend>성별</legend>
          <FormRadioOrCheckbox
            label="남성"
            name="usergender"
            value="남성"
            defaultChecked
          />
          <FormRadioOrCheckbox label="여성" name="usergender" value="여성" />
        </fieldset>

        <fieldset>
          <legend>기타 사항</legend>
          <FormRadioOrCheckbox
            label="성인"
            name="isAdult"
            value="성인"
            type="checkbox"
          />
          <FormRadioOrCheckbox
            label="자가 보유"
            name="hasHouse"
            type="checkbox"
            value="자가 보유"
          />
          <FormRadioOrCheckbox
            label="해외 거주"
            name="liveForeign"
            type="checkbox"
            value="해외 거주"
          />
        </fieldset>

        <button type="submit">제출</button>
      </form>
    </div>
  );
}

export default ReactForm;
