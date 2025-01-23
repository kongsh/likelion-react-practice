import { useState } from 'react';
import FormInput from '@/components/form-input.tsx';
import FormTextarea from '@/components/form-textarea.tsx';

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
  const [profileImages, setProfileImages] = useState<File[]>([]);
  const [contents, setContents] = useState('입력하세요');

  const photoURLs = profileImages.map((img) => URL.createObjectURL(img));

  const handleUploadProfile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length > 0) {
      setProfileImages(Object.values(files));
    }
  };

  const handleUpdateContents = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContents(e.target.value);
  };

  // radio state (checked)
  const [isMale, setIsMale] = useState<boolean>(true);
  const handleToggleGender = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isMale = e.target.value === 'male';
    setIsMale(isMale);
  };

  // checkbox state (checked)
  const [checkBoxes, setCheckBoxes] = useState([
    { label: '성인', name: 'isAdult', value: 'isAdult', checked: false },
    { label: '집 보유', name: 'hasHouse', value: 'hasHouse', checked: false },
    {
      label: '해외 거주',
      name: 'liveForeign',
      value: 'liveForeign',
      checked: false,
    },
  ]);

  const handleCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target;

    const updatedCheckBoxes = checkBoxes.map((item) => {
      if (item.value === value) {
        item.checked = checked;
      }

      return item;
    });

    setCheckBoxes(updatedCheckBoxes);
  };

  return (
    <div className="ReactForm">
      <h2>React 폼(form)</h2>
      <form style={formStyles}>
        <fieldset>
          <legend>성별</legend>
          <FormInput
            label="남성"
            name="usergender"
            value="male"
            type="radio"
            checked={isMale}
            onChange={handleToggleGender}
          />
          <FormInput
            label="여성"
            name="usergender"
            value="female"
            type="radio"
            checked={!isMale}
            onChange={handleToggleGender}
          />
        </fieldset>

        <fieldset>
          <legend>기타 사항</legend>
          {checkBoxes.map(({ value, ...rest }) => (
            <FormInput
              key={value}
              value={value}
              type="checkbox"
              onChange={handleCheckBoxChange}
              {...rest}
            />
          ))}
        </fieldset>

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

        <div
          style={{ border: '0.5px solid rgba(0 0 0 / 30%)', padding: '12px' }}
        >
          <FormInput
            label="프로필"
            type="file"
            accept="image/*"
            multiple
            onChange={handleUploadProfile}
          />
          {profileImages?.map(({ name }, index) => (
            <img
              key={name}
              style={{ marginBlockStart: 8, marginInline: 8 }}
              src={photoURLs.at(index)}
              alt="업로드 할 프로필"
              width={100}
              height={100}
            />
          ))}
        </div>

        <FormInput type="date" label="여행날짜" />

        <FormInput type="datetime-local" label="비행기 출국 시간" />

        <FormTextarea
          label="인삿말"
          name="contents"
          value={contents}
          onChange={handleUpdateContents}
          resize="vertical"
        />

        <button type="submit">제출</button>
        <button type="reset">초기화</button>
      </form>
    </div>
  );
}

export default ReactForm;
