import { useState } from 'react';
import FormInput from '@/components/form-input.tsx';
import FormTextarea from '@/components/form-textarea.tsx';

const formStyles = {
  display: 'flex',
  flexFlow: 'column',
  alignItems: 'center',
  gap: '8px',
};

const initialFormData = {
  limitAge: 40,
  profileImage: [],
  isMale: true,
  checkBoxes: [
    { label: '성인', name: 'isAdult', value: 'isAdult', checked: false },
    { label: '집 보유', name: 'hasHouse', value: 'hasHouse', checked: false },
    {
      label: '해외 거주',
      name: 'liveForeign',
      value: 'liveForeign',
      checked: false,
    },
  ],
};

function ReactForm() {
  const handleResetForm = () => {
    setLimitAge(initialFormData.limitAge);
    setProfileImages(initialFormData.profileImage);
    setIsMale(initialFormData.isMale);
    setCheckBoxes(initialFormData.checkBoxes);
  };

  const [limitAge, setLimitAge] = useState(initialFormData.limitAge);

  const [profileImages, setProfileImages] = useState<File[]>(
    initialFormData.profileImage
  );
  const handleUploadProfile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length > 0) {
      setProfileImages(Object.values(files));
    }
  };
  const photoURLs = profileImages.map((img) => URL.createObjectURL(img));

  // radio state (checked)
  const [isMale, setIsMale] = useState<boolean>(initialFormData.isMale);
  const handleToggleGender = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isMale = e.target.value === 'male';
    setIsMale(isMale);
  };

  // checkbox state (checked)
  const [checkBoxes, setCheckBoxes] = useState(initialFormData.checkBoxes);
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

  const [spices, setSpices] = useState<string[]>(['lavender']);

  const [progress, setProgress] = useState(10);

  return (
    <div className="ReactForm">
      <h2>React 폼(form)</h2>

      <div className="comboBox">
        <label htmlFor="spice-pick" className="sr-only">
          향신료 선택
        </label>
        <select
          form="ReactForm"
          name="spice-pick"
          id="spice-pick"
          value={spices}
          onChange={(e) => {
            const options = [...e.target.selectedOptions];
            const values = options.map((option) => option.value);
            setSpices(values);
          }}
          multiple
        >
          <option value="lemongrass">레몬그라스</option>
          <option value="rosmari">로즈마리</option>
          <option value="lavender">라벤더</option>
        </select>
      </div>

      <form id="ReactForm" style={formStyles}>
        <div
          style={{
            display: 'flex',
            flexFlow: 'column',
            gap: 8,
            marginBlock: 20,
          }}
        >
          <label htmlFor="progress-bar">진행률</label>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <progress id="progress-bar" value={progress} max={100}>
              15%
            </progress>
            <output>{progress}%</output>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <FormInput
            type="range"
            label="진행률 업데이트"
            min={0}
            max={100}
            step={5}
            value={progress}
            onChange={(e) => {
              const newValue = Number(e.target.value);
              setProgress(newValue);
            }}
          />
        </div>

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
        <FormInput type="number" label="나이" defaultValue={24} />
        <FormInput type="color" label="색상" defaultValue="#ffffff" />

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
          placeholder="안녕하세요!!"
          resize="vertical"
        />

        <div style={{ display: 'flex', gap: 8 }}>
          <button type="submit">제출</button>
          <button type="reset" onClick={handleResetForm}>
            초기화
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReactForm;
