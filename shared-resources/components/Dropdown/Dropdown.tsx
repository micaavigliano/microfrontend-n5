import React, {
  useState,
  useRef,
  useEffect,
  KeyboardEvent,
  ReactNode,
  Children,
  isValidElement,
} from "react";
import { DropdownContainer } from "./Dropdown.styled";

interface DropdownProps {
  children: ReactNode;
  label: string;
}

const Dropdown: React.FC<DropdownProps> = ({ children, label }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const selectedOptRef = useRef<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setActiveIndex(-1);
  };

  const handleOutsideClick = (ev: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(ev.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const handleNav = (ev: KeyboardEvent<HTMLDivElement>) => {
    if (ev.key === "ArrowDown") {
      ev.preventDefault();
      setActiveIndex((prev) =>
        prev < Children.count(children) - 1 ? prev + 1 : 0
      );
    } else if (ev.key === "ArrowUp") {
      ev.preventDefault();
      setActiveIndex((prev) =>
        prev > 0 ? prev - 1 : Children.count(children) - 1
      );
    } else if (ev.key === "Enter" && activeIndex !== -1) {
      const selected = Children.toArray(children)[activeIndex];
      if (isValidElement(selected)) {
        selectedOptRef.current = selected.props.children as string;
        setIsOpen(false);
        setActiveIndex(-1);
      }
    } else if (ev.key === "Escape") {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (isOpen && activeIndex !== -1 && listRef.current) {
      const listItems = listRef.current.children;
      if (listItems[activeIndex]) {
        (listItems[activeIndex] as HTMLElement).focus();
      }
    }
  }, [isOpen, activeIndex]);

  return (
    <DropdownContainer ref={dropdownRef} onKeyDown={handleNav}>
      <button
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        id="dropdownBtn"
        className="dropdown-btn"
      >
        {selectedOptRef.current || label}
      </button>
      {isOpen && (
        <ul
          ref={listRef}
          role="listbox"
          aria-labelledby="dropdownBtn"
          className="dropdown-list"
        >
          {Children.map(children, (child, index) => {
            if (isValidElement(child)) {
              return (
                <li
                  key={index}
                  tabIndex={0}
                  role="option"
                  onClick={() => {
                    let value;
                    if (
                      typeof child.props.children === "object" &&
                      child.props.children !== null
                    ) {
                      value = child.props.children.props.children;
                    }
                    selectedOptRef.current = String(value);

                    setIsOpen(false);
                    setActiveIndex(-1);
                  }}
                >
                  {child}
                </li>
              );
            }
            return null;
          })}
        </ul>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
